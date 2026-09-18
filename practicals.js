const EPA_PRACTICALS = {
  bricklaying: {
    title: "Reduced cavity wall practice build",
    duration: "3–4 hours",
    basis: "A reduced workshop practice task based on the construction features and tolerances specified for the ST0095 bricklayer practical assessment. It is practice material, not an official EPA task.",
    brief: [
      "Build a small cavity-wall section containing a 450 × 450 mm minimum opening.",
      "Include cavity closure, partial-fill insulation with retaining clips, fire stopping, DPC, wall ties, weep holes, a lintel with soldier course, cavity tray, brick-on-edge sill, a small return wall and two mortar-joint finishes including half-round.",
      "Work from the supplied workshop drawing/specification and your normal RAMS, PPE and safe-working procedures.",
      "Before starting, check the drawing, calculate/confirm materials and establish your setting-out points."
    ],
    checks: [
      {label:"Overall wall length", kind:"measure", target:1200, tol:3, unit:"mm"},
      {label:"Overall wall height", kind:"measure", target:900, tol:3, unit:"mm"},
      {label:"Opening width", kind:"measure", target:450, tol:3, unit:"mm"},
      {label:"Opening height", kind:"measure", target:450, tol:3, unit:"mm"},
      {label:"Opening position", kind:"measure", target:600, tol:3, unit:"mm", note:"Measure centreline from the nominated datum on the drawing."},
      {label:"Wall level/gauge", kind:"measure", target:0, tol:3, unit:"mm/m", note:"Record the maximum measured deviation per metre."},
      {label:"Wall plumb", kind:"measure", target:0, tol:3, unit:"mm/m", note:"Record the maximum measured deviation per metre."},
      {label:"Soldier course level/plumb", kind:"measure", target:0, tol:3, unit:"mm", note:"Record maximum deviation."},
      {label:"Brick-on-edge sill slope", kind:"measure", target:15, tol:3, unit:"°"},
      {label:"Brick-on-edge sill horizontal level", kind:"measure", target:0, tol:1.5, unit:"mm", note:"Record maximum deviation."},
      {label:"DPC correctly positioned and continuous", kind:"points", max:2},
      {label:"Cavity tray, weep holes, wall ties and insulation correctly installed", kind:"points", max:2},
      {label:"Lintel, soldier course and cavity closure correctly installed", kind:"points", max:2},
      {label:"Small return wall correctly bonded and finished", kind:"points", max:2},
      {label:"Mortar joints: two finishes including half-round", kind:"points", max:2},
      {label:"Safe working area, PPE and work controls maintained", kind:"points", max:2}
    ]
  },
  siteCarpentry: {
    title: "Reduced gable-roof and loft-hatch practice build",
    duration: "3–4 hours",
    basis: "A reduced workshop practice task based on the current ST0264 Site Carpenter practical assessment, which uses a straight gable roof with traditional cut rafters, roof trusses and a hinged loft hatch. It is practice material, not an official EPA task.",
    brief: [
      "Construct a reduced roof-bay section using traditional cut rafters and a prepared truss arrangement.",
      "Include representative fascia, soffit, barge board, soffit ventilation, lateral restraint and a hinged upward-opening loft hatch with lining, hinge recess and latch.",
      "Cut and fit the timber components from the workshop drawing. Use the specified roof pitch, centres and dimensions on your local drawing.",
      "Complete the final inspection and record the measurements in the app."
    ],
    checks: [
      {label:"Traditional roof timber length", kind:"measure", target:600, tol:2, unit:"mm"},
      {label:"Rafter position/spacing", kind:"measure", target:400, tol:3, unit:"mm"},
      {label:"Rafter cut angle", kind:"measure", target:30, tol:2, unit:"°"},
      {label:"Truss position/spacing", kind:"measure", target:400, tol:3, unit:"mm"},
      {label:"Lateral restraint positions", kind:"points", max:2},
      {label:"Fascia, soffit and barge board installed correctly", kind:"points", max:2},
      {label:"Minimum two soffit vents correctly positioned", kind:"points", max:2},
      {label:"Loft hatch overall position", kind:"measure", target:500, tol:4, unit:"mm", note:"Measure from the nominated datum on the practice drawing."},
      {label:"Hatch-to-lining gap", kind:"measure", target:2, tol:2, unit:"mm"},
      {label:"Hinge recess flushness", kind:"measure", target:0, tol:2, unit:"mm"},
      {label:"Hinge position", kind:"measure", target:100, tol:2, unit:"mm", note:"Measure from the nominated edge on the drawing."},
      {label:"Lining mitre joints", kind:"points", max:2},
      {label:"Latch position and operation", kind:"points", max:2},
      {label:"Correct measuring, marking, cutting and fixing sequence", kind:"points", max:2},
      {label:"Safe working area, tool control and PPE maintained", kind:"points", max:2}
    ]
  },
  benchJoinery: {
    title: "Reduced timber casement window practice build",
    duration: "3–4 hours",
    basis: "A reduced workshop practice task based on the current ST0264 Architectural Joiner practical assessment, which uses a softwood window frame with a hinged casement. It is practice material, not an official EPA task.",
    brief: [
      "Manufacture a reduced softwood window frame and hinged casement from the workshop drawing.",
      "Include the specified frame/casement joints, glazing rebate, hinges and security latch/ironmongery required by the practice drawing.",
      "Set out accurately, machine or hand-cut the components using safe workshop procedures, assemble and check the finished product.",
      "Complete the final dimensional and workmanship inspection in the app."
    ],
    checks: [
      {label:"Frame overall length", kind:"measure", target:600, tol:2, unit:"mm"},
      {label:"Frame overall width", kind:"measure", target:450, tol:2, unit:"mm"},
      {label:"Frame overall thickness", kind:"measure", target:50, tol:2, unit:"mm"},
      {label:"Casement overall length", kind:"measure", target:500, tol:2, unit:"mm"},
      {label:"Casement overall width", kind:"measure", target:350, tol:2, unit:"mm"},
      {label:"Casement overall thickness", kind:"measure", target:44, tol:2, unit:"mm"},
      {label:"Glazing rebate size", kind:"measure", target:15, tol:2, unit:"mm"},
      {label:"Glazing rebate position", kind:"measure", target:12, tol:2, unit:"mm"},
      {label:"Hinge recess flushness", kind:"measure", target:0, tol:2, unit:"mm"},
      {label:"Hinge positioning", kind:"measure", target:100, tol:2, unit:"mm", note:"Measure from the nominated edge on the practice drawing."},
      {label:"Joints: position", kind:"measure", target:0, tol:2, unit:"mm", note:"Record maximum positional deviation."},
      {label:"Joints: fit", kind:"points", max:2},
      {label:"Joints: flushness", kind:"points", max:2},
      {label:"Security latch flush and correctly positioned", kind:"points", max:2},
      {label:"Accurate setting out, safe machine/tool use and clean finish", kind:"points", max:2}
    ]
  }
};