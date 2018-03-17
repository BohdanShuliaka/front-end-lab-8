var rootNode = document.getElementById("root");
var treeElement = document.createElement('div');

function createFolderTree(structure, treeElement) {
    var ul = document.createElement('ul');
        treeElement.appendChild(ul);

    for (var i = 0; i < structure.length; i++) {
        var li = document.createElement('li');
            ul.appendChild(li);
        var div = document.createElement('div');
            li.appendChild(div);
        var icon = document.createElement('i');
            div.appendChild(icon);
            icon.classList.add('material-icons');
        var span = document.createElement('span');
            span.innerText = structure[i].title;
            div.appendChild(span);  
            if (structure[i].folder) {
                div.setAttribute('onclick','Switch(this)');
                icon.innerHTML = 'folder';
                icon.classList.add('folder');
                
                if (structure[i].children) {
                    createFolderTree(structure[i].children, li);
                } else {
                    var ul = document.createElement('ul');
                        li.appendChild(ul);
                
                    var li = document.createElement('li');
                        li.innerHTML = 'Folder is empty';
                        ul.appendChild(li);
                      }
            } else {
                      icon.innerHTML = 'insert_drive_file';
                    }
                  }
                }    
function Switch(x) {
    var folder = x.childNodes[0];
    var children = x.parentElement.childNodes[1];
        children.classList.toggle('visible');
    if (folder.innerHTML === 'folder') {
        folder.innerHTML = 'folder_open';
    } else {
        folder.innerHTML = 'folder';
    }
}

createFolderTree(structure, treeElement);
rootNode.appendChild(treeElement);