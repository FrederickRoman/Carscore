const buying = {
    id: "buying",
    label: "Purchase price",
    items: [
      { text: "very high", value: "vhigh" },
      { text: "high", value: "high" },
      { text: "medium", value: "med" },
      { text: "low", value: "low" },
    ],
  };
  
  const maint = {
    id: "maint",
    label: "Maintenance level",
    items: [
      { text: "very high", value: "vhigh" },
      { text: "high", value: "high" },
      { text: "medium", value: "med" },
      { text: "low", value: "low" },
    ],
  };
  
  const doors = {
    id: "doors",
    label: "Number of doors",
    items: [
      { text: "2", value: "2" },
      { text: "3", value: "3" },
      { text: "4", value: "4" },
      { text: "5 or more", value: "5more" },
    ],
  };
  
  const persons = {
    id: "persons",
    label: "Number of seats",
    items: [
      { text: "2", value: "2" },
      { text: "4", value: "4" },
      { text: "5 or more", value: "more" },
    ],
  };
  
  const lug_boot = {
    id: "lug_boot",
    label: "Trunk/Boot size",
    items: [
      { text: "small", value: "small" },
      { text: "medium", value: "med" },
      { text: "big", value: "big" },
    ],
  };
  
  const safety = {
    id: "safety",
    label: "Safety level",
    items: [
      { text: "low", value: "low" },
      { text: "medium", value: "med" },
      { text: "high", value: "high" },
    ],
  };
  
  const attrs = [buying, maint, doors, persons, lug_boot, safety];

  export default attrs;