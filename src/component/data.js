export const total_filter = ["programming", "study", "python", "java", "statistics", "javascript", "react", "css", "html", "algo", "web", "frontend", "backend", "database",
"sql", "nosql", "mongodb", "framework", "cloud", "library", "opencv", "tkinter", "pandas", "numpy", "tools"];

export const owner = {
    name: "Ken",
    title: "Newer",
    description: "Hello Everyone, nice to meet you. Please enjoy the content."
  }

  export const bardata1 = {
    labels: ["programming", "python", "react", "java", "javascript"],
    datasets: [
      {
        label: "Top 5 Most Posts Tags",
        data: [15, 13, 10, 8, 5],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  export const bardata2 = {
    labels: ["cloud", "nosql", "sql", "study", "html"],
    datasets: [
      {
        label: "Top 5 Less Posts Tags",
        data: [3, 3, 1, 1, 0],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95"
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  let mylist = [];
  var today = new Date();
  for(var i = 30; i > 0; i--){
    var myday = new Date(new Date().setDate(today.getDate() - i));
    mylist.push(myday.toISOString().substring(5, 10))
  }

  const last_days_list = mylist;

  export const linedata = {
    labels: last_days_list,
    datasets: [
      {
        label: "Last 30 Day New Posts",
        data: [2, 1, 0, 0, 0, 1, 3, 2, 2, 1,
        1, 0, 2, 3, 1, 2, 1, 3, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

