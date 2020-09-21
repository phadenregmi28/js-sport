let team1shoot = document.querySelector("#teamone-shoot-button");
let team1numbershoot = document.querySelector("#teamone-numshots");
let team1goals = document.querySelector("#teamone-numgoals")
team1shoot.addEventListener("click",function() {
console.log("team1shoot clicked");
let team1number = Number(team1numbershoot.innerHTML) + 1;
team1numbershoot.innerHTML = team1number;
if (Math.random() * 100 < 90) {
    console.log("hi");
    let scoregoals = Number(team1goals.innerHTML) + 1;
    team1goals.innerHTML = scoregoals;
    }
})

let team2shoot = document.querySelector("#teamtwo-shoot-button");
let team2numbershoot = document.querySelector("#teamtwo-numshots");
let team2goals = document.querySelector("#teamtwo-numgoals")
team2shoot.addEventListener("click",function() {
    console.log("team2shoot clicked");
    let team2number = Number(team2numbershoot.innerHTML) + 1;
    team2numbershoot.innerHTML = team2number;
    if (Math.random() * 100 < 50) {
        console.log("hi");
        let scoregoals = Number(team2goals.innerHTML) + 1;
        team2goals.innerHTML = scoregoals;
        }
})

let numberofresets = document.querySelector("#reset-button");
let resetbutton = document.querySelector("#num-resets");
numberofresets.addEventListener("click", function() {
    console.log("reset clicked");
    let numberofresets = Number(resetbutton.innerHTML) + 1;
    resetbutton.innerHTML = numberofresets;
    team1numbershoot.innerHTML = 0
    team2numbershoot.innerHTML = 0
    team1goals.innerHTML = 0
    team2goals.innerHTML = 0
})
element.style {
}
<style>
#mmvdp_meta_title, #mmvdp_meta_title:hover, #mmvdp_meta_title:visited {
    color: #111;
}
<style>
#mmvdp_meta_title, #mmvdp_meta_properties a, #mm_vdmb a:hover {
    text-decoration: none;
}
<style>
a, a * {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}
a:visited, #b_results>li a:visited {
    color: #609;
}
a, #b_tween a:visited, #b_results .b_no a {
    color: #1a0dab;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
}
<style>
.mmvdp_meta_top {
    white-space: normal;
}
<style>
.mmvdp_meta_top, #mmvdp_meta_properties {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
}
<style>
.mmvdp_meta_top {
    font: 16px/22px 'segoe ui',arial,helvetica,sans-serif;
    color: #767676;
}
#b_content, #b_context, .b_expando {
    line-height: 1.2em;
}
body, .b_no h4, h2 .b_secondaryText, h2 .b_alert {
    font: 13px/normal 'Roboto',Helvetica,Sans-Serif;
}
html, body, h1, h2, h3, h4, h5, h6, p, img, ol, ul, li, form, table, tr, th, td, blockquote {
    border: 0;
    border-collapse: collapse;
    border-spacing: 0;
    list-style: none;
    margin: 0;
    padding: 0;
}
body, .b_promoteText, #b_tween a.ftrH, #b_tween a.ftrH:hover, .b_expando, .b_expando h2, .b_expando h3, .b_expando h4, .b_expando .b_defaultText, .b_active a, .b_active a:visited, .b_active a:hover, #b_results>.b_pag a, #b_results .b_no, #b_content a.cbl:visited, #b_content a.cbl {
    color: #666;
}