
const graph = (require("../lib/graph.js")).graph;


const graphOut = [
    " ▲                                                              ",
    " │                                                              ",
    " │                                                              ",
    " │       ▄            ▄            ▄                            ",
    " │       █            █            █                            ",
    " │       █  ▇         █  ▇         █  ▇                         ",
    " │  ▃    █  █    ▃    █  █    ▃    █  █                         ",
    " │  █    █  █ ▄  █    █  █ ▄  █    █  █ ▄                       ",
    " │  █    █  █ █  █    █  █ █  █    █  █ █                       ",
    " │  █   ██  █ █▂ █   ██  █ █▂ █   ██  █ █▂                      ",
    " │  █   ██  █ ██ █   ██  █ ██ █   ██  █ ██                      ",
    " │  █   ██▅ █ ██ █   ██▅ █ ██ █   ██▅ █ ██                      ",
    " │▁▇█▁ ▁███▁█▇██▇█▁ ▁███▁█▇██▇█▁ ▁███▁█▇██                      ",
    " │████ ████████████ ████████████ █████████                      ",
    " │████▄████████████▄████████████▄█████████                      ",
    " └────────────────────────────────────────────────────────────▶ "
];



exports.graphTest=function(){
    global.nanoTest.add(
        "graph",
        {
            "function":graph,
            "options":[[4,5,12,4,2,4,9,16,6,4,14,5,11,8,5,12,4,2,4,9,16,6,4,14,5,11,8,5,12,4,2,4,9,16,6,4,14,5,11,8,1]],
        },
        "j==",
        graphOut
    );
};
