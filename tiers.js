const dropZone = document.querySelectorAll('.drop-zone').forEach(initialDropZoneSetup);
const items = document.querySelectorAll('.item').forEach(initialItemSetup)
const defaultZone = document.getElementById('default-drop-zone');

let itemToDrag;

function initialItemSetup(item) {
    item.addEventListener('dragstart', onDragStart);
    item.addEventListener('dblclick', onDoubleClick);
}

function onDoubleClick() {
    if(this.parentNode !== defaultZone){
        defaultZone.appendChild(this);
    }
}

function initialDropZoneSetup(zone) {
    zone.addEventListener('drop', onItemDrop);
    zone.addEventListener('dragover', onDragOver);
}

function onDragOver(event){
    event.preventDefault();
}

function onItemDrop(){
    if(itemToDrag.parentNode !== this){
        this.appendChild(itemToDrag);
    }
}

function onDragStart(event){
    itemToDrag = event.target;
}

