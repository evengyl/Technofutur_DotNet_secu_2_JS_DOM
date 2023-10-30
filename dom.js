//###################
// les différents getElement
//###################


//récupération du title par sont id
let titleNode = document.getElementById("titleTag")
console.log(titleNode)

console.log(titleNode.innerHTML)
document.write(titleNode.innerHTML)



//récupération d'un ul par sont id
let subListLink = document.getElementById("subListLink")
console.log(subListLink.childNodes)
console.log(subListLink.children)

//affichage des enfant li de la liste
for(item of subListLink.children){
    console.log(item)
}


let listContainerClass = document.getElementsByClassName("container")
console.log(listContainerClass)

//trick permettant de transformer une collection non énumérable en tableau
let test = Array(...listContainerClass)
//
let test2 = Array.from(listContainerClass)
console.log(test)
console.log(test2)


for(item of listContainerClass){
    console.log(item)
    //item.style.border = "1px solid black"
}


let listHttpTag = document.getElementsByTagName("a")
console.log(listHttpTag)
for(item of listHttpTag){
    console.log(item)
    //item.style.border = "2px solid red"
}


console.clear()
//############################################################################
// creation d'un, un peu de ciblage html et insertion APRES
//############################################################################


//Creation d'un élément, ciblage et insertion
let title = document.getElementById("titleTag")

let subSubTitle = document.createElement("h6")
subSubTitle.innerText = "Je suis un sous sous titre de la page fait en JS par un gros pignouf"
subSubTitle.classList.add("header", "col", "s12", "light")
console.log(subSubTitle)
console.log(title.nextElementSibling.lastElementChild)
title.nextElementSibling.lastElementChild.appendChild(subSubTitle)



console.clear()


//############################################################################
// Pointer ou lister des choses attributs, firstChild, lastChild, parentNode, nodeName, previousSibling,
//nextSibling, textContent, nodeType, nodeValue
//############################################################################

let attrDuLogo = document.getElementById("logo-container").attributes
console.log(attrDuLogo) //en js il y a indexion auto
console.log(attrDuLogo[0].value)
console.log(attrDuLogo[1])
console.log(attrDuLogo[2])
console.log(attrDuLogo.id.value)
console.log(attrDuLogo.href)
console.log(attrDuLogo.class)


let allNodeBody = document.body.childNodes
let allNodeBody2 = document.body.children
console.log(allNodeBody)
console.log(allNodeBody2)

console.clear()

let firstElementOfBody = document.body.firstChild
let firstElementOfBody2 = document.body.firstElementChild
console.log(firstElementOfBody)
console.log(firstElementOfBody2)

console.clear()


let lastElementOfBody = document.body.lastChild
let lastElementOfBody2 = document.body.lastElementChild
console.log(lastElementOfBody)
console.log(lastElementOfBody2)

console.clear()

let titleGetForParentNodeTest = document.getElementById("titleTag")
let parent = titleGetForParentNodeTest.parentNode
console.log(parent)
console.log(parent.nodeName)
console.log(parent.nodeType)
console.log(parent.nodeValue)


console.clear()

let footerBlock = document.getElementById("footerBlock")

let previousElementSibling = footerBlock.previousElementSibling
let previousSibling = footerBlock.previousSibling

let nextElementSibling = footerBlock.nextElementSibling
let nextSibling = footerBlock.nextSibling

console.log(footerBlock)
console.log(previousElementSibling)
console.log(previousSibling)
console.log(nextElementSibling)
console.log(nextSibling)


console.clear()

let allBody = document.body
console.log(allBody.textContent)


console.clear() 


let navbarMain = document.getElementById("navbarMain")

let newSpecificLi = document.createElement("li")

let linkForLiSpecific = document.createElement("a")
linkForLiSpecific.innerText = "Boutton de menu ultra spécifique"
linkForLiSpecific.setAttribute("href", "http://google.be")

//append ajoute juste après le noeud
//newSpecificLi.append(linkForLiSpecific)

//appendChild ajoute après tous les enfants 
newSpecificLi.appendChild(linkForLiSpecific)

navbarMain.appendChild(newSpecificLi)


console.clear()


let footerCopy = document.getElementsByClassName("footer-copyright")
footerCopy = footerCopy[0]


let pIconCopyright = document.createElement("p")
pIconCopyright.innerHTML = "&copy; Copyright Techno Net Sécu 2"

footerCopy.insertBefore(pIconCopyright, footerCopy.firstChild)

console.clear()



let connectMenu = document.getElementById("connectMenu")
let settingsMenu = document.getElementsByClassName("settingsMenu")[0]

connectMenu.insertAdjacentHTML("beforebegin", "<p>&#128514;</p>")
connectMenu.insertAdjacentHTML("afterbegin", "<p>&#128514;</p>")
connectMenu.insertAdjacentHTML("beforeend", "<p>&#128514;</p>")
connectMenu.insertAdjacentHTML("afterend", "<p>&#128514;</p>")



let iconP1 = document.createElement("p")
let iconP2 = document.createElement("p")
let iconP3 = document.createElement("p")
let iconP4 = document.createElement("p")
iconP1.innerHTML = "&#128520;"
iconP2.innerHTML = "&#128520;"
iconP3.innerHTML = "&#128520;"
iconP4.innerHTML = "&#128520;"
//https://www.w3schools.com/html/html_emojis.asp

settingsMenu.insertAdjacentElement("beforebegin", iconP1)
settingsMenu.insertAdjacentElement("afterbegin", iconP2)
settingsMenu.insertAdjacentElement("beforeend", iconP3)
settingsMenu.insertAdjacentElement("afterend", iconP4)


console.clear()

let logoContainer = document.getElementById("logo-container")
let parentLogo = logoContainer.parentNode

let newImage = document.createElement("img")
newImage.src = "https://www.technofuturtic.be/Portals/0/Logo.png"
//newImage.setAttribute("src", "https://www.technofuturtic.be/Portals/0/Logo.png")

//l'ordre c'est : nouveau noeud, ancien à remplacer
parentLogo.replaceChild(newImage, logoContainer)


console.clear()


let downloadButton = document.getElementById("download-button")
let downloadButtonParent = downloadButton.parentNode
downloadButtonParent.removeChild(downloadButton)

console.clear()


let myInput = document.getElementById("myInput")
console.log(myInput.getAttribute("type"))

if(myInput.hasAttribute("type"))
    console.log("Mon input possède bien l'attribut Type")

myInput.removeAttribute("type")
myInput.setAttribute("type", "date")


console.clear()






