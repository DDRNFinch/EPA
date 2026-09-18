const EPA_DISCUSSIONS = {
  bricklaying: [
    {
      prompt: "You have been asked to build a section of brickwork from drawings. Talk through how you would prepare for the job and complete it to the required standard.",
      points: [
        { label: "Read and interpret the drawings", terms: ["drawing", "drawings", "plan", "section", "detail"] },
        { label: "Check dimensions and setting out", terms: ["dimension", "dimensions", "setting out", "set out", "datum"] },
        { label: "Select and check tools, equipment and PPE", terms: ["tools", "equipment", "ppe", "personal protective", "safety"] },
        { label: "Prepare materials and mortar correctly", terms: ["materials", "mortar", "mix", "cement", "sand"] },
        { label: "Check line, level, gauge, bond and finish", terms: ["line", "level", "gauge", "bond", "finish", "quality"] }
      ]
    },
    {
      prompt: "You are starting a new wall and need to set it out accurately before laying the first course. Explain what you would do and how you would check your work.",
      points: [
        { label: "Check the drawings and required dimensions", terms: ["drawings", "dimensions", "measurements", "specification"] },
        { label: "Establish the correct datum and starting points", terms: ["datum", "starting point", "reference", "benchmark"] },
        { label: "Measure and mark the wall accurately", terms: ["measure", "mark", "tape", "setting out", "set out"] },
        { label: "Check corners, openings and bond", terms: ["corner", "corners", "opening", "bond", "return"] },
        { label: "Recheck measurements before laying", terms: ["check", "recheck", "double check", "accuracy", "square"] }
      ]
    },
    {
      prompt: "You have mixed mortar and are about to begin laying bricks. Talk through how you would lay the bricks and keep the work accurate as the wall rises.",
      points: [
        { label: "Check the mortar consistency and suitability", terms: ["mortar", "consistency", "mix", "workable", "plastic"] },
        { label: "Lay bricks to the correct bond and gauge", terms: ["bond", "gauge", "course", "brickwork"] },
        { label: "Maintain line and level", terms: ["line", "level", "spirit level", "string line"] },
        { label: "Form and finish the joints correctly", terms: ["joints", "jointing", "finish", "perp", "bed joint"] },
        { label: "Check the work regularly and correct defects", terms: ["check", "correct", "defect", "quality", "alignment"] }
      ]
    },
    {
      prompt: "You discover that part of your brickwork is not running true while you are building. Explain how you would identify the problem, correct it and prevent it happening again.",
      points: [
        { label: "Stop and identify where the error has occurred", terms: ["stop", "identify", "check", "error", "problem"] },
        { label: "Use line, level and measurements to diagnose it", terms: ["line", "level", "measure", "measurement", "gauge"] },
        { label: "Correct the affected work safely", terms: ["correct", "remove", "rebuild", "adjust", "refix"] },
        { label: "Check the bond, joints and alignment", terms: ["bond", "joints", "alignment", "perp", "course"] },
        { label: "Recheck against the drawings and specification", terms: ["drawings", "specification", "check", "dimensions", "tolerance"] }
      ]
    },
    {
      prompt: "At the end of the job you need to leave the work area safe and the finished brickwork ready for inspection. Talk through what you would do.",
      points: [
        { label: "Inspect the finished brickwork", terms: ["inspect", "inspection", "check", "quality", "finished"] },
        { label: "Check line, level, gauge, bond and joints", terms: ["line", "level", "gauge", "bond", "joints"] },
        { label: "Deal with defects or unfinished work", terms: ["defect", "defects", "repair", "correct", "unfinished"] },
        { label: "Clean tools and leave materials safely", terms: ["clean", "tools", "materials", "store", "storage"] },
        { label: "Leave the work area clean and safe", terms: ["clean", "safe", "housekeeping", "waste", "hazard"] }
      ]
    }
  ],
  siteCarpentry: [
    {
      prompt: "You have been asked to construct and install a timber door frame from drawings. Talk through how you would prepare, make and install it.",
      points: [
        { label: "Read the drawings and specification", terms: ["drawings", "drawing", "specification", "plan", "detail"] },
        { label: "Check dimensions and set out accurately", terms: ["dimensions", "measure", "setting out", "set out", "measurements"] },
        { label: "Select and safely use tools and PPE", terms: ["tools", "equipment", "ppe", "safety", "personal protective"] },
        { label: "Cut and assemble the frame accurately", terms: ["cut", "cutting", "assemble", "joint", "jointing"] },
        { label: "Install, fix and check the finished frame", terms: ["install", "fix", "plumb", "level", "check"] }
      ]
    },
    {
      prompt: "You are preparing to build a section of a timber floor. Explain how you would interpret the information, prepare the materials and construct it correctly.",
      points: [
        { label: "Interpret drawings and construction details", terms: ["drawings", "details", "plan", "specification", "interpret"] },
        { label: "Set out joists and required dimensions", terms: ["set out", "setting out", "joists", "dimensions", "centres"] },
        { label: "Select suitable timber, fixings and tools", terms: ["timber", "fixings", "tools", "materials", "nails"] },
        { label: "Install joists with correct spacing and support", terms: ["joists", "spacing", "support", "bearing", "centres"] },
        { label: "Check level, alignment and structural requirements", terms: ["level", "alignment", "straight", "check", "structural"] }
      ]
    },
    {
      prompt: "A roof opening is required for a loft hatch. Talk through how you would prepare and form the opening safely and accurately.",
      points: [
        { label: "Read the drawings and identify the opening size", terms: ["drawings", "opening", "size", "dimensions", "plan"] },
        { label: "Check the existing structure before cutting", terms: ["structure", "check", "inspect", "joists", "existing"] },
        { label: "Set out the opening accurately", terms: ["set out", "setting out", "measure", "mark", "dimensions"] },
        { label: "Use correct cutting methods and temporary support", terms: ["cut", "cutting", "support", "temporary", "safety"] },
        { label: "Install trimmers and check the finished opening", terms: ["trimmer", "trimmers", "fix", "level", "check"] }
      ]
    },
    {
      prompt: "You are fitting skirting and architrave in a room with several corners and openings. Explain how you would achieve a neat professional finish.",
      points: [
        { label: "Measure the room and plan the sequence", terms: ["measure", "measurements", "plan", "sequence", "layout"] },
        { label: "Select the correct timber and tools", terms: ["timber", "tools", "material", "materials", "saw"] },
        { label: "Cut joints accurately for corners and openings", terms: ["joints", "mitre", "scribe", "cut", "corners"] },
        { label: "Fix the timber securely and consistently", terms: ["fix", "fixings", "nails", "adhesive", "secure"] },
        { label: "Check alignment and finish the work neatly", terms: ["alignment", "level", "straight", "finish", "quality"] }
      ]
    },
    {
      prompt: "You have completed a site carpentry task and are preparing the work for inspection. Talk through your final checks and how you would deal with any defects.",
      points: [
        { label: "Inspect the completed work against the drawings", terms: ["inspect", "inspection", "drawings", "specification", "check"] },
        { label: "Check measurements, levels and alignment", terms: ["measurements", "dimensions", "level", "alignment", "plumb"] },
        { label: "Check joints, fixings and security", terms: ["joints", "fixings", "secure", "joint", "fixed"] },
        { label: "Identify and correct defects", terms: ["defects", "defect", "correct", "repair", "rectify"] },
        { label: "Leave the tools and work area safe and tidy", terms: ["tools", "clean", "tidy", "safe", "housekeeping"] }
      ]
    }
  ],
  benchJoinery: [
    {
      prompt: "You have been asked to make a timber window frame from a drawing in the workshop. Talk through how you would prepare, machine, assemble and finish the job.",
      points: [
        { label: "Interpret the drawing and specification", terms: ["drawing", "drawings", "specification", "details", "plan"] },
        { label: "Select and prepare suitable timber", terms: ["timber", "wood", "material", "prepare", "moisture"] },
        { label: "Set up and safely use hand and machine tools", terms: ["tools", "machine", "machines", "ppe", "safety"] },
        { label: "Produce accurate joints and assemble the frame", terms: ["joints", "joint", "mortice", "tenon", "assemble"] },
        { label: "Check dimensions, squareness and finish", terms: ["dimensions", "square", "squareness", "finish", "quality"] }
      ]
    },
    {
      prompt: "You need to produce a mortice and tenon joint for a joinery component. Explain how you would mark out, machine or cut, assemble and check the joint.",
      points: [
        { label: "Read the drawing and establish joint dimensions", terms: ["drawing", "dimensions", "joint", "specification", "size"] },
        { label: "Mark out accurately using the correct tools", terms: ["mark out", "marking out", "gauge", "square", "measure"] },
        { label: "Set up and use tools or machinery safely", terms: ["machine", "machinery", "tools", "ppe", "safety"] },
        { label: "Produce a clean accurate mortice and tenon", terms: ["mortice", "tenon", "accurate", "clean", "fit"] },
        { label: "Dry assemble and check the joint before final assembly", terms: ["dry assemble", "assemble", "fit", "check", "glue"] }
      ]
    },
    {
      prompt: "A component you have made does not fit its mating component correctly. Talk through how you would find the cause and put it right.",
      points: [
        { label: "Stop and inspect both components", terms: ["stop", "inspect", "check", "components", "parts"] },
        { label: "Recheck drawings and dimensions", terms: ["drawings", "dimensions", "measurements", "specification", "size"] },
        { label: "Check marking out, machining and joint accuracy", terms: ["marking out", "machining", "joint", "accuracy", "machine"] },
        { label: "Make controlled adjustments without damaging the work", terms: ["adjust", "adjustment", "correct", "remove", "trim"] },
        { label: "Test the fit again and confirm the final quality", terms: ["fit", "test", "check", "quality", "finish"] }
      ]
    },
    {
      prompt: "You are preparing a finished joinery component for sanding and final finishing. Explain how you would inspect and prepare it.",
      points: [
        { label: "Inspect the component for defects", terms: ["inspect", "defects", "defect", "check", "damage"] },
        { label: "Check dimensions, joints and overall accuracy", terms: ["dimensions", "joints", "accuracy", "square", "measure"] },
        { label: "Remove machining marks and prepare surfaces", terms: ["sanding", "sand", "surface", "marks", "abrasive"] },
        { label: "Protect edges and maintain the required profile", terms: ["edges", "profile", "protect", "detail", "finish"] },
        { label: "Leave the component clean and ready for finishing", terms: ["clean", "finish", "finishing", "dust", "ready"] }
      ]
    },
    {
      prompt: "You are completing a bench joinery job and need to present it for inspection. Talk through your final quality checks, documentation and workshop housekeeping.",
      points: [
        { label: "Compare the finished item with the drawing", terms: ["drawing", "drawings", "specification", "compare", "check"] },
        { label: "Check dimensions, square, joints and fit", terms: ["dimensions", "square", "joints", "fit", "measurements"] },
        { label: "Check the surface finish and visible defects", terms: ["finish", "surface", "defects", "quality", "appearance"] },
        { label: "Record or report any issues that remain", terms: ["record", "report", "issues", "defects", "documentation"] },
        { label: "Clean the bench, tools and work area safely", terms: ["clean", "bench", "tools", "safe", "housekeeping"] }
      ]
    }
  ]
};
