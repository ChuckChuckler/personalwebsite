let index = 0;
let songIndex = 0;

let quotes=[
    ["the eyes are the mirror of the soul", "beauty is in the eye of the beholder", "eyes speak the truth even when lips lie", "through your eyes, the world takes shape", "a glance can say more than a thousand words", "your eyes hold the secrets of your story", "dreams shine brightest in your eyes", "see with your heart, not just your eyes", "the light in your eyes ignites the world", "a single gaze can spark a revolution", "your eyes reflect the universe within", "what you focus on shapes your vision", "behind every set of eyes lies a unique story", "let your eyes shine with kindness", "eyes can unlock a world of wonder", "eyes are the compass of the soul's journey", "let your eyes reflect hope in the darkest times"],
["your face is a reflection of your inner light", "a face is a canvas where emotions bloom", "a world lights up with every face that dares to hope", "your face reflects your soul", "the brain is the key to unlocking endless potential", "the heart beats strongest when fueled by love"],
["every breath is a gift to cherish","the body thrives when the mind believes", "the soul finds expression through the body", "your hands hold the power to create change", "strength resides in every fiber of your being", "the heart beats with infinite courage", "strength starts in the heart, not the muscles", "tour lungs breathe in possibility with every inhale", "inside you is the power to overcome anything"]
];

let e= [["a","b","c"],["b","a","c"],["c","a","b"]]; 

let l=["40","35","19"];

function randint(int){
    return Math.floor(Math.random()*int);
}

let projects = {
    athena:{
        title:"Athena",
        desc:"An AI-powered app that allows you to upload your class notes and generate a multiple-choice practice test.",
        tools:"Flask, HTML, CSS, JS",
        repo:'https://github.com/ChuckChuckler/athena',
        demo:'https://sharma39avishi.pythonanywhere.com/',
        img:'images/projectPreviews/athenaPreview.png'
    },

    gpacalc:{
        title:"GPACalc",
        desc:"A weighted GPA calculator with a login system allowing you to save your information.",
        tools:"Flask, HTML, CSS, JS",
        repo:'https://github.com/ChuckChuckler/gpacalc-rehaul',
        demo:'https://avishis3939.pythonanywhere.com/',
        img:'images/projectPreviews/gpacalcPreview.png'
    },

    tnme:{
        title:"That's Not My Element",
        desc:"An element-focused chemistry practice game loosely based on the game \"That's Not My Neighbor\".",
        tools:"HTML, CSS, JS",
        repo:'https://github.com/ChuckChuckler/notmyelement',
        demo:'https://fluffy-sfogliatella-5528a0.netlify.app/main',
        img:'images/projectPreviews/tnmePreview.png'
    },

    classifyingMatter:{
        title:"Classifying Matter",
        desc:"A fast-paced drag-and-drop game about classifying substances (element, compounds, and mixtures). With a leaderboard!",
        tools:"Node, Express, MongoDB, HTML, CSS, JS",
        repo:'https://github.com/ChuckChuckler/matter-classification',
        demo:'https://matter-classification.onrender.com/',
        img:'images/projectPreviews/mcPreview.png'
    },

    astronautRescue:{
        title:"Astronaut Rescue",
        desc:"An algebra II Solving-Over-C practice game where you play as an astronaut trying to save your ship from destruction.",
        tools:"HTML, CSS, JS",
        repo:'https://github.com/ChuckChuckler/astronaut-rescue',
        demo:'https://astronaut-rescue.vercel.app/main.html',
        img:'images/projectPreviews/arPreview.png'
    }
};

let songs = [
    document.getElementById("ificouldbecomeacomet"),
    document.getElementById("littlemissingstars"),
    document.getElementById("twilightlight"),
    document.getElementById("glued"),
    document.getElementById("glow"),
    document.getElementById("nomad"),
    document.getElementById("irony"),
    document.getElementById("danger"),
    document.getElementById("withorwithoutme"),
    document.getElementById("yokanimiorete")
]

let currentSong = songs[0];

let q=document.getElementById("q");

q.display = "none";

for(let i=0; i<3;i++){
    document.getElementById(e[i][0]).addEventListener("mouseover", ()=>{
    document.getElementById(e[i][1]).animate(
        [{opacity: 1}, {opacity: 0}], {duration: 250}
    )
    document.getElementById(e[i][1]).style.opacity = 0;
    document.getElementById(e[i][2]).animate(
        [{opacity: 1}, {opacity: 0}], {duration: 250}
    )
    document.getElementById(e[i][2]).style.opacity = 0;
    q.style.display = "block";q.style.left=`${l[i]}%`;
    q.innerText = quotes[i][randint(quotes[i].length)];});
    
    document.getElementById(e[i][0]).addEventListener("mouseleave", ()=>{
        document.getElementById(e[i][1]).animate(
            [{opacity: 0}, {opacity: 1}], {duration: 250}
        )
        document.getElementById(e[i][1]).style.opacity=1;
        document.getElementById(e[i][2]).animate(
            [{opacity: 0}, {opacity: 1}], {duration: 250}
        )
        document.getElementById(e[i][2]).style.opacity=1;
        document.getElementById("q").style.display = "none";
    });
}

document.getElementById("pfp").addEventListener("mouseover", ()=>{
    if(window.innerWidth <= 1100){
        document.getElementById("pfp").animate(
            [{width:"40vw"}, {width:"42vw"}],{duration:500,easing:"cubic-bezier(0.25, 0.1, 0.25, 1.5)"}
        );

        document.getElementById("pfp").style.width = "40vw";
        document.getElementById("socials2").animate(
            [{opacity: 0}, {opacity: 1}], {duration:450}
        );
        document.getElementById("socials2").style.opacity = 1;
        document.getElementById("socials1").style.opacity = 0;

    }else{
        document.getElementById("pfp").animate(
            [{width:"18vw"}, {width:"20vw"}],{duration:500,easing:"cubic-bezier(0.25, 0.1, 0.25, 1.5)"}
        );

        document.getElementById("pfp").style.width = "20vw";

        document.getElementById("socials1").animate(
            [{opacity: 0}, {opacity: 1}], {duration:450}
        );
        document.getElementById("socials1").style.opacity = 1;
        document.getElementById("socials2").style.opacity = 0;
    }
})

document.getElementById("pfp").addEventListener("mouseleave", ()=>{
    if(window.innerWidth <= 1100){
        document.getElementById("pfp").animate(
            [{width:"42vw"}, {width:"40vw"}],{duration:500,easing:"cubic-bezier(0.25, 0.1, 0.25, 1.5)"}
        );
        document.getElementById("pfp").style.width="40vw";
        document.getElementById("socials2").animate(
            [{opacity: 1}, {opacity: 0}], {duration:150}
        );
        document.getElementById("socials2").style.opacity = 0;
        document.getElementById("socials1").style.opacity = 0;
    }else{
        document.getElementById("pfp").animate(
            [{width:"20vw"}, {width:"18vw"}],{duration:500,easing:"cubic-bezier(0.25, 0.1, 0.25, 1.5)"}
        );
        document.getElementById("pfp").style.width="18vw";

        document.getElementById("socials1").animate(
            [{opacity: 1}, {opacity: 0}], {duration:150}
        );
        document.getElementById("socials1").style.opacity = 0;
        document.getElementById("socials2").style.opacity = 0;
    }
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let typeIndex = 0; 

function main(){
    ScrollTrigger.refresh();

    if("scrollRestoration" in history){
        history.scrollRestoration  = "manual";
    }

    window.scrollTo(0, 0);

    new TypeIt("#title", {
        strings: "run hello_world",
        speed: 80
    }).go();

    sleep(2500).then(()=>{
        document.getElementById("mainHolder").animate(
            [{opacity: 0}, {opacity: 1}], {duration: 1000}
        )
        document.getElementById("mainHolder").style.opacity = 1;
    });
}

function locationRdrct(link){
    window.open(link, "_blank");
}

function dispSkill(skill){
    document.getElementById("skillName").innerText = `• ${skill} •`;
}

function unDispSkill(){
    document.getElementById("skillName").innerText = "༺✦༻";
}

function next(){
    index++;
    let projectsArr = Object.keys(projects);
    if(index == projectsArr.length){
        index = 0;
    }
    
    change(projectsArr, index);
}

function prev(){
    let projectsArr = Object.keys(projects);

    if(index == 0){
        index = projectsArr.length;
    }
    index--;
    
    change(projectsArr, index);
}

function change(projectsArr, index){
    document.getElementById("projectPreview").src = projects[projectsArr[index]].img;
    document.getElementById("projectTitle").innerText = projects[projectsArr[index]].title;
    document.getElementById("projectDesc").innerText = projects[projectsArr[index]].desc;
    document.getElementById("projectTools").innerText = projects[projectsArr[index]].tools;
    document.getElementById("projectRepo").onclick = function(){
        locationRdrct(projects[projectsArr[index]].repo);
    };
    document.getElementById("projectDemo").onclick = function(){
        locationRdrct(projects[projectsArr[index]].demo);
    };
}

//

function nextSong(){
    songIndex++;
    if(songIndex == songs.length){
        songIndex = 0;
    }
    changeSong();
}

function prevSong(){
    if(songIndex == 0){
        songIndex = songs.length;
    }
    songIndex--;
    
    changeSong();
}

function changeSong(){
    currentSong.classList.remove("visibleSong");
    currentSong.classList.add("hiddenSong");

    currentSong = songs[songIndex];

    currentSong.classList.add("visibleSong");
    currentSong.classList.remove("hiddenSong");
}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let animRunning = false;

ScrollTrigger.create({
    trigger: ".bioholder",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: ()=>{
        if(!animRunning){
            animRunning = true;

            let bioscrollTl = gsap.timeline();
            bioscrollTl.to(window, {
                duration: 1,
                scrollTo: "#profileBreak",
                ease:"power3.out"
            }),

            bioscrollTl.to(".bioholder", {
                duration: 2.5,
                opacity: 1,
            }, "<"),

            bioscrollTl.to(".welcomeHolder", {
                duration: 2.5,
                opacity: 0
            }, "<"),

            bioscrollTl.to("#profileDivider", {
                duration: 2,
                width: "26vw",
                ease:"power4.out"
            }, "<"),

            gsap.to("#d", {
                duration: 2,
                width: "10%",
                ease:"power4.out"
            }, "<"),

            document.getElementById("profileTitle").innerText = "";
            document.getElementById("pronouns").innerText = "";
            document.getElementById("innerProfile").style.opacity = 0;

            new TypeIt("#profileTitle", {
                speed: 60,
                waitUntilVisible: true,
                afterComplete: function(instance){
                    instance.destroy();
                }
            })

            .type("Avishi", {delay: 200})
            .type(" Sharma")

            .go();

            
            new TypeIt("#pronouns", {
                speed: 60,
                strings: `<span id="pronouns1" class="span2">she/her</span> ⨳ <span id="pronouns2" class="span2">fullstack dev</span>`,
                waitUntilVisible: true,
                afterComplete: function(instance){
                    instance.destroy();
                }
            }).go();


            sleep(2500).then(()=>{
                let spans = document.getElementsByClassName("span2");
                if(spans){
                    for(let i = 0; i < 2; i++){
                        spans[i].animate(
                            [{backgroundColor: "black", color: "white"}, {backgroundColor: "white", color: "black"}], {duration: 1000}
                        )
                        spans[i].style.backgroundColor = "white";
                        spans[i].style.color = "black";
                    }
                }

                document.getElementById("innerProfile").animate(
                    [{opacity: 0}, {opacity: 1}], {duration: 1000}
                )

                document.getElementById("innerProfile").style.opacity = 1;

                if(window.innerWidth <= 1100){
                    document.getElementById("pfp").animate(
                        [{marginRight: "0%"}, {marginRight: "25%"}], {duration: 500, easing: "ease-out"}
                    );
                }else{
                    document.getElementById("pfp").animate(
                        [{marginRight: "-100px"}, {marginRight: "0px"}], {duration: 500, easing: "ease-out"}
                    );
                }

                animRunning = false;
            });
        }
    },
});

ScrollTrigger.create({
    trigger: ".welcomeHolder",
    start: "bottom top",
    end: "top top",
    scrub: "true",
    onUpdate: (self)=>{
        if(self.direction == -1){
            if(!animRunning){
                animRunning = true;
                gsap.to(window,{
                    duration: 1,
                    scrollTo: "#title",
                    ease:"power3.out"
                }),
                
                gsap.to(".welcomeHolder", {
                    duration: 2.5,
                    opacity: 1
                },"<"),

                gsap.to(".bioholder", {
                    duration: 2.5,
                    opacity: 0
                },"<"),

                gsap.to("#profileDivider", {
                    duration: 2.5,
                    width: "0.5vw",
                    ease:"power2.out"
                }, "<")

                gsap.to("#d", {
                    duration: 2,
                    width: "65%",
                    ease:"power4.out"
                }, "<")
            }
    
            sleep(1000).then(()=>{
                animRunning = false;
            });
        }
    }
})

let horizontal = false;

ScrollTrigger.create({
    trigger: ".fullbioHolder",
    scrub: 1,
    onUpdate: (self)=>{
        if(self.direction == 1){
            if(!animRunning && horizontal == false){
                animRunning = true;
                gsap.to(".fullbioHolder",{
                    scrollTo: ".aboutMeHolder",
                    ease: "power2.out",
                    duration: 1,
                })

                gsap.to(window,{
                    scrollTo: ".fullbioHolder",
                    ease: "power2.out",
                    duration: 1
                }, "<")

                document.getElementById("divider").style.width = "3vw";
                gsap.to("#divider",{
                    duration: 2,
                    width: "26vw",
                    ease:"power3.out"
                }, "<")

                sleep(1000).then(()=>{
                    animRunning = false;
                    horizontal = true;
                })
            }
        }else if(self.direction == -1){
            if(!animRunning && horizontal == true){
                animRunning = true;
                gsap.to(".fullbioHolder",{
                    scrollTo: ".bioHolder",
                    duration: 1,
                    ease: "power2.out"
                });

                document.getElementById("profileDivider").style.width = "3vw";
                gsap.to("#profileDivider",{
                    duration: 2,
                    width: "26vw",
                    ease:"power2.out"
                }, "<")

                gsap.to(window,{
                    scrollTo: ".fullbioHolder",
                    ease: "power2.out",
                    duration: 1
                }, "<")

                sleep(1000).then(()=>{
                    animRunning = false;
                    horizontal = false;
                })
            }
        }
    }
})

ScrollTrigger.create({
    trigger: "#skillsDivHolder",
    onEnter: ()=>{
        if(!animRunning && horizontal == true){
            animRunning = true;
            gsap.to(window,{
                scrollTo: "#skillsDivHolder",
                ease: "power2.out",
                duration: 1
            })

            let skills = document.getElementsByClassName("skills");
            for(let i = 0; i < 2; i++){
                skills[i].style.width = "2%";
            }

            if(window.innerWidth <= 1100){
                gsap.to(".skills",{
                    width: "50%",
                    duration: 2,
                    ease: "power1.out"
                }, "<")
            }else{
                gsap.to(".skills",{
                    width: "100%",
                    duration: 2,
                    ease: "power3.out"
                }, "<")
            }

            document.getElementById("skillName").style.opacity = 0;

            gsap.to("#skillName", {
                opacity: 1,
                duration: 2
            }, "<")

            document.getElementById("currentSkills").innerText = "";
            document.getElementById("pendingSkills").innerText = "";

            new TypeIt("#currentSkills", {
                strings: "Current Skills",
                speed: 60,
                afterComplete: function(instance){
                    instance.destroy();
                }
            }).go();

            new TypeIt("#pendingSkills", {
                strings: "Learning/Want To Learn",
                speed: 60,
                afterComplete: function(instance){
                    instance.destroy();
                }
            }).go();

            sleep(1000).then(()=>{
                ScrollTrigger.refresh();
                animRunning = false;
            })
        }
    }
})

ScrollTrigger.create({
    trigger: "#projectsOuterHolder",
    start: "top+100px bottom",
    onEnter:()=>{
        if(!animRunning){
            animRunning = true;

            gsap.to(window,{
                scrollTo: "#projectsOuterHolder",
                duration: 1,
                ease: "power2.out"
            })

            document.getElementById("projectsTitle").innerText = "";

            document.getElementById("innerProject").style.opacity = 0;

            let navs = document.getElementsByClassName("navBtn");

            navs[0].style.opacity = 0;
            navs[1].style.opacity = 0;

            new TypeIt("#projectsTitle", {
                strings: "PROJECTS",
                speed: 60,
                afterComplete:function(instance){
                    instance.destroy();
                }
            }).go();

            gsap.to("#innerProject", {
                opacity: 1,
                duration: 2
            })

            gsap.to(".navBtn", {
                opacity: 1,
                duration: 2
            })

            sleep(1000).then(()=>{
                animRunning = false;
            })
        }
    }
})

ScrollTrigger.create({
    trigger: "#projectsOuterHolder",
    scrub: "true",
    onUpdate: (self)=>{
        if(self.direction == -1){
            if(!animRunning){
                animRunning = true;
                gsap.to(window,{
                    scrollTo: "#skillsDivHolder",
                    duration: 1,
                    ease: "power2.out"
                })
    
                sleep(1000).then(()=>{
                    animRunning = false;
                })
            }
        }
    }
})
