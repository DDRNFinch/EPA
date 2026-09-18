const EPA_DISCUSSIONS = {
  bricklaying: [
    {
      prompt: "You have been asked to build a section of brickwork from drawings. Talk through how you would prepare for the job and complete it to the required standard.",
      points: [
        { label: "Drawings", terms: ["drawing", "drawings", "plan", "section", "detail"] },
        { label: "Dimensions & setting out", terms: ["dimension", "dimensions", "setting out", "set out", "datum"] },
        { label: "Tools & PPE", terms: ["tools", "equipment", "ppe", "personal protective", "safety"] },
        { label: "Materials & mortar", terms: ["materials", "mortar", "mix", "cement", "sand"] },
        { label: "Line & level", terms: ["line", "level", "gauge", "bond", "finish", "quality"] }
      ]
    },
    {
      prompt: "You are starting a new wall and need to set it out accurately before laying the first course. Explain what you would do and how you would check your work.",
      points: [
        { label: "Drawings & dimensions", terms: ["drawings", "dimensions", "measurements", "specification"] },
        { label: "Starting datum", terms: ["datum", "starting point", "reference", "benchmark"] },
        { label: "Measure & mark", terms: ["measure", "mark", "tape", "setting out", "set out"] },
        { label: "Corners & bond", terms: ["corner", "corners", "opening", "bond", "return"] },
        { label: "Final measurements", terms: ["check", "recheck", "double check", "accuracy", "square"] }
      ]
    },
    {
      prompt: "You have mixed mortar and are about to begin laying bricks. Talk through how you would lay the bricks and keep the work accurate as the wall rises.",
      points: [
        { label: "Mortar consistency", terms: ["mortar", "consistency", "mix", "workable", "plastic"] },
        { label: "Bond & gauge", terms: ["bond", "gauge", "course", "brickwork"] },
        { label: "Line & level", terms: ["line", "level", "spirit level", "string line"] },
        { label: "Joint finish", terms: ["joints", "jointing", "finish", "perp", "bed joint"] },
        { label: "Quality checks", terms: ["check", "correct", "defect", "quality", "alignment"] }
      ]
    },
    {
      prompt: "You discover that part of your brickwork is not running true while you are building. Explain how you would identify the problem, correct it and prevent it happening again.",
      points: [
        { label: "Find the error", terms: ["stop", "identify", "check", "error", "problem"] },
        { label: "Line & level", terms: ["line", "level", "measure", "measurement", "gauge"] },
        { label: "Safe correction", terms: ["correct", "remove", "rebuild", "adjust", "refix"] },
        { label: "Bond & alignment", terms: ["bond", "joints", "alignment", "perp", "course"] },
        { label: "Drawings & specification", terms: ["drawings", "specification", "check", "dimensions", "tolerance"] }
      ]
    },
    {
      prompt: "At the end of the job you need to leave the work area safe and the finished brickwork ready for inspection. Talk through what you would do.",
      points: [
        { label: "Final inspection", terms: ["inspect", "inspection", "check", "quality", "finished"] },
        { label: "Line & joints", terms: ["line", "level", "gauge", "bond", "joints"] },
        { label: "Defects", terms: ["defect", "defects", "repair", "correct", "unfinished"] },
        { label: "Tools & materials", terms: ["clean", "tools", "materials", "store", "storage"] },
        { label: "Housekeeping", terms: ["clean", "safe", "housekeeping", "waste", "hazard"] }
      ]
    }
  ],
  siteCarpentry: [
    {
      prompt: "You have been asked to construct and install a timber door frame from drawings. Talk through how you would prepare, make and install it.",
      points: [
        { label: "Drawings & specification", terms: ["drawings", "drawing", "specification", "plan", "detail"] },
        { label: "Dimensions & setting out", terms: ["dimensions", "measure", "setting out", "set out", "measurements"] },
        { label: "Tools & PPE", terms: ["tools", "equipment", "ppe", "safety", "personal protective"] },
        { label: "Cut & assemble", terms: ["cut", "cutting", "assemble", "joint", "jointing"] },
        { label: "Install & check", terms: ["install", "fix", "plumb", "level", "check"] }
      ]
    },
    {
      prompt: "You are preparing to build a section of a timber floor. Explain how you would interpret the information, prepare the materials and construct it correctly.",
      points: [
        { label: "Drawings & details", terms: ["drawings", "details", "plan", "specification", "interpret"] },
        { label: "Joist setting out", terms: ["set out", "setting out", "joists", "dimensions", "centres"] },
        { label: "Timber & fixings", terms: ["timber", "fixings", "tools", "materials", "nails"] },
        { label: "Joist support", terms: ["joists", "spacing", "support", "bearing", "centres"] },
        { label: "Level & alignment", terms: ["level", "alignment", "straight", "check", "structural"] }
      ]
    },
    {
      prompt: "A roof opening is required for a loft hatch. Talk through how you would prepare and form the opening safely and accurately.",
      points: [
        { label: "Drawings & opening", terms: ["drawings", "opening", "size", "dimensions", "plan"] },
        { label: "Existing structure", terms: ["structure", "check", "inspect", "joists", "existing"] },
        { label: "Opening setting out", terms: ["set out", "setting out", "measure", "mark", "dimensions"] },
        { label: "Cutting & support", terms: ["cut", "cutting", "support", "temporary", "safety"] },
        { label: "Trimmers & checks", terms: ["trimmer", "trimmers", "fix", "level", "check"] }
      ]
    },
    {
      prompt: "You are fitting skirting and architrave in a room with several corners and openings. Explain how you would achieve a neat professional finish.",
      points: [
        { label: "Measure & sequence", terms: ["measure", "measurements", "plan", "sequence", "layout"] },
        { label: "Timber & tools", terms: ["timber", "tools", "material", "materials", "saw"] },
        { label: "Corner joints", terms: ["joints", "mitre", "scribe", "cut", "corners"] },
        { label: "Secure fixing", terms: ["fix", "fixings", "nails", "adhesive", "secure"] },
        { label: "Alignment & finish", terms: ["alignment", "level", "straight", "finish", "quality"] }
      ]
    },
    {
      prompt: "You have completed a site carpentry task and are preparing the work for inspection. Talk through your final checks and how you would deal with any defects.",
      points: [
        { label: "Drawings & inspection", terms: ["inspect", "inspection", "drawings", "specification", "check"] },
        { label: "Measurements & alignment", terms: ["measurements", "dimensions", "level", "alignment", "plumb"] },
        { label: "Joints & fixings", terms: ["joints", "fixings", "secure", "joint", "fixed"] },
        { label: "Defects & correction", terms: ["defects", "defect", "correct", "repair", "rectify"] },
        { label: "Housekeeping", terms: ["tools", "clean", "tidy", "safe", "housekeeping"] }
      ]
    }
  ],
  benchJoinery: [
    {
      prompt: "You have been asked to make a timber window frame from a drawing in the workshop. Talk through how you would prepare, machine, assemble and finish the job.",
      points: [
        { label: "Drawing & specification", terms: ["drawing", "drawings", "specification", "details", "plan"] },
        { label: "Timber selection", terms: ["timber", "wood", "material", "prepare", "moisture"] },
        { label: "Tools & machinery", terms: ["tools", "machine", "machines", "ppe", "safety"] },
        { label: "Joints & assembly", terms: ["joints", "joint", "mortice", "tenon", "assemble"] },
        { label: "Dimensions & finish", terms: ["dimensions", "square", "squareness", "finish", "quality"] }
      ]
    },
    {
      prompt: "You need to produce a mortice and tenon joint for a joinery component. Explain how you would mark out, machine or cut, assemble and check the joint.",
      points: [
        { label: "Joint dimensions", terms: ["drawing", "dimensions", "joint", "specification", "size"] },
        { label: "Marking out", terms: ["mark out", "marking out", "gauge", "square", "measure"] },
        { label: "Safe tool use", terms: ["machine", "machinery", "tools", "ppe", "safety"] },
        { label: "Mortice & tenon", terms: ["mortice", "tenon", "accurate", "clean", "fit"] },
        { label: "Dry assembly", terms: ["dry assemble", "assemble", "fit", "check", "glue"] }
      ]
    },
    {
      prompt: "A component you have made does not fit its mating component correctly. Talk through how you would find the cause and put it right.",
      points: [
        { label: "Inspect components", terms: ["stop", "inspect", "check", "components", "parts"] },
        { label: "Drawings & dimensions", terms: ["drawings", "dimensions", "measurements", "specification", "size"] },
        { label: "Marking & machining", terms: ["marking out", "machining", "joint", "accuracy", "machine"] },
        { label: "Controlled adjustment", terms: ["adjust", "adjustment", "correct", "remove", "trim"] },
        { label: "Test fit", terms: ["fit", "test", "check", "quality", "finish"] }
      ]
    },
    {
      prompt: "You are preparing a finished joinery component for sanding and final finishing. Explain how you would inspect and prepare it.",
      points: [
        { label: "Inspect defects", terms: ["inspect", "defects", "defect", "check", "damage"] },
        { label: "Dimensions & accuracy", terms: ["dimensions", "joints", "accuracy", "square", "measure"] },
        { label: "Surface preparation", terms: ["sanding", "sand", "surface", "marks", "abrasive"] },
        { label: "Edges & profile", terms: ["edges", "profile", "protect", "detail", "finish"] },
        { label: "Ready for finishing", terms: ["clean", "finish", "finishing", "dust", "ready"] }
      ]
    },
    {
      prompt: "You are completing a bench joinery job and need to present it for inspection. Talk through your final quality checks, documentation and workshop housekeeping.",
      points: [
        { label: "Compare drawing", terms: ["drawing", "drawings", "specification", "compare", "check"] },
        { label: "Dimensions & fit", terms: ["dimensions", "square", "joints", "fit", "measurements"] },
        { label: "Surface finish", terms: ["finish", "surface", "defects", "quality", "appearance"] },
        { label: "Report issues", terms: ["record", "report", "issues", "defects", "documentation"] },
        { label: "Workshop housekeeping", terms: ["clean", "bench", "tools", "safe", "housekeeping"] }
      ]
    }
  ]
};
