"use strict";
const palette = (t, e) => {
    function n() {
        Array.from(document.querySelectorAll("#paletteUI li")).forEach(t => {
            t.classList.remove("copy");
        });
    }

    let o = `
        <ul id="paletteUI">
            ${t.map(t => `
                <li style="background: ${t}"><input type="text" value="${t}" readonly></input></li>
            `).join("")}
        </ul>
    `;
    e.innerHTML = o;

    // Add click sound
    const audio = new Audio('click-sound.mp3'); // Replace with your sound file

    o && Array.from(document.querySelectorAll("#paletteUI li")).forEach(t => {
        t.addEventListener("click", t => {
            let e = t.target;
            e.querySelector("input").select();
            n();

            try {
                document.execCommand("copy");
                e.classList.add("copy");

                // Play the click sound
                audio.currentTime = 0; // Reset sound to start
                audio.play();
            } catch (t) {
                console.log("Unable to copy", t);
            }
        });
    });
};

const style = `
    #paletteUI {
        margin: 0;
        padding: 0;
        font-size: 12px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
    }
    #paletteUI li {
        font-family: 'Arial', 'sans-serif' !important;
        cursor: pointer;
        text-transform: uppercase;
        margin: 10px;
        position: relative;
        background-size: 100% 75% !important;
        width: 140px;
        height: 120px;
        padding: 5px;
        box-sizing: border-box;
        border-radius: 4px;
        overflow: hidden;
        transition: all .15s ease-in-out;
        box-shadow: 2px 2px 5px #babec4, -2px -2px 5px #fff; 
    }
    #paletteUI li:hover {
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
    }
    #paletteUI li input {
        font-family: 'Arial', 'sans-serif';
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        position: absolute;
        padding: 10px 0;
        bottom: 0;
        right: 0;
        white-space: nowrap;
        overflow: hidden;
        display: block;
        width: 100%;
        text-align: center;
        text-overflow: ellipsis;
        color: #666;
        border: none;
        pointer-events: none;
        background: #ffffff;
    }
    #paletteUI li input::selection {
        background: transparent;
    }
    #paletteUI li:after {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80%;
        opacity: 0;
        content: 'Copied!';
        letter-spacing: 1px;
        text-align: center;
        color: #fff;
        font-size: 8px;
        text-transform: uppercase;
        text-shadow: 0 1px rgba(0, 0, 0, 0.2);
    }
    #paletteUI li.copy:after {
        animation: copy 1.6s ease-in-out both;
    }
    @keyframes copy {
        0% {
            opacity: 0;
            transform: translateY(10px);
        }
        15%, 80% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
!function(t) {
    var e = document.createElement("style");
    e.innerHTML = t, document.body.appendChild(e);
}(style);

// Just add the color code if you want to show a new color
const colors = [
  "#E9573F",
  "#FC6E51",
  "#DA4453",
  "#ED5565",
  "#8CC152",
  "#A0D468",
  "#FCBB42",
  "#FFCE54",
  "#3BAFDA",
  "#4FC1E9",
  "#37BC9B",
  "#48CFAD",
  "#967ADC",
  "#AC92EC",
  "#4A89DC",
  "#5D9CEC",
  "#E6E9ED",
  "#F5F7FA",
  "#D770AD",
  "#EC87C0",
  "#434A54",
  "#656D78",
  "#AAB2BD",
  "#CCD1D9",
  "#A1C4C4",
  "#B7E1E1",
  "#CDE7D0",
  "#DFF3E3",
  "#E8F9D8",
  "#FBEDD8",
  "#FFD1A4",
  "#FDC09B",
  "#F5A3A1",
  "#E28D91",
  "#D783AF",
  "#BFA5CC",
  "#A8C1DF",
  "#8EC4D8",
  "#6BA9CE",
  "#489DC4",
  "#3195B3",
  "#3989A8",
  "#4E7D9E",
  "#567294",
  "#5D6A8C",
  "#625D83",
  "#765F7B",
  "#8B6474",
  "#A16B7E",
  "#A57689",
  "#9A8A98",
  "#8D9CA3",
  "#80ADB0",
  "#72BDB7",
  "#63CCC7",
  "#4DD8CC",
  "#2BD9C2",
  "#0BC1A4",
  "#0FA788",
  "#12907C",
  "#13796E",
  "#165F60",
  "#184D55",
  "#1A374D",
  "#27354A",
  "#38364D",
  "#4A3852",
  "#5E3753",
  "#72374F",
  "#823A4B",
  "#9A424B",
  "#A7534E",
  "#B46151",
  "#C06B54",
  "#C67C60",
  "#D18A68",
  "#D99D72",
  "#E4B486",
  "#EFC5A3",
  "#F6D3C4",
  "#F9E0D4",
  "#FCEEDC",
  "#FEF8F2",
  "#E3F8E8",
  "#CAF7DC",
  "#A9EEC9",
  "#87E5B5",
  "#63DCAB",
  "#45D1A4",
  "#2AC599",
  "#17A482",
  "#0B846E",
  "#016556",
  "#004C46",
  "#003735",
  "#002427",
  "#001818",
  "#23242A",
  "#393B43",
  "#4C4E5B",
  "#5F6174",
  "#72738D",
  "#8B86A6",
  "#A199C1",
  "#B3ACD8",
  "#C9BEE8",
  "#E3D2F4",
  "#F7E6FC",
  "#FCECF7",
  "#FDE3ED",
  "#FDDADC",
  "#FCD3CB",
  "#FCC7C2",
  "#FCB4A8",
  "#FA9C8D",
  "#F78474",
  "#F06B5C",
  "#E75843",
  "#D74332",
  "#BD3022",
  "#A72113",
  "#8D170C",
  "#730E07",
  "#5C0A06",
  "#450805",
  "#2E0604",
  "#1C0402",
  "#110203",
  "#080203",
  "#0E1013",
  "#1A2B32",
  "#324A55",
  "#4E6977",
  "#6D8490",
  "#8FA2A7",
  "#AFC0BF",
  "#D0DEE0",
  "#F1FCFF",
  "#F5FBFD",
  "#E9F2F5",
  "#DBE4E6",
  "#CCD7D9",
  "#BECACD",
  "#B0BDC1",
  "#A1B1B5",
  "#92A4AA",
  "#84959F",
  "#778694",
  "#6A7688",
  "#5C656C",
  "#4F5554",
  "#423C42",
  "#352832",
  "#281222",
  "#1A0D18",
  "#12090D",
  "#0C0507",
  "#050304",
  "#030202",
  "#000000"
];


palette(colors, document.querySelector('.colors-flat'));
