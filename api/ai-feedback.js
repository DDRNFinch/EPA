export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
  if(!process.env.OPENAI_API_KEY) return res.status(503).json({error:"AI provider is not configured. Add OPENAI_API_KEY to the deployment environment."});
  try{
    const b=req.body||{};
    const prompt=b.image
      ?"You are an experienced UK construction apprenticeship EPA practice assessor. Review this practical-work photograph. Do not invent details that cannot be seen. State what is visibly demonstrated, what cannot be verified from the image, and specific checks against the drawing, specification, tolerances, safety controls and workmanship. This is practice feedback, not an official EPA decision. Course: "+b.course+". Task: "+b.task+". KSB: "+b.ksb+"."
      :"You are an experienced UK construction apprenticeship EPA practice assessor. Give concise, constructive practice feedback on this learner answer. Identify strengths and gaps against the KSB, safety, sequence, quality, measurements/tolerances, communication and professional judgement. Give specific improvements. Do not claim the learner has passed an EPA. Course: "+b.course+". KSB: "+b.ksb+". Question/task: "+b.question+". Learner answer: "+b.answer;
    const content=b.image
      ?[{type:"input_text",text:prompt},{type:"input_image",image_url:b.image}]
      :[{type:"input_text",text:prompt}];
    const r=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+process.env.OPENAI_API_KEY},body:JSON.stringify({model:process.env.OPENAI_MODEL||"gpt-5-mini",input:[{role:"user",content}],max_output_tokens:700})});
    const d=await r.json();
    if(!r.ok) return res.status(r.status).json({error:d.error?.message||"AI request failed"});
    const text=d.output?.flatMap(x=>x.content||[]).find(x=>x.type==="output_text")?.text||"No feedback returned.";
    return res.status(200).json({feedback:text});
  }catch(e){return res.status(500).json({error:"AI review failed"});}
}