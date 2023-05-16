function onClickTabContentReusable(containerId, nameContainer) {
  const parent = document.getElementById(containerId);
  parent.onclick = (event) => openResult(event, nameContainer);

  return parent;
}

function openResult(evt, casingName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(casingName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

onClickTabContentReusable('open-tab-surface', 'Surface');
onClickTabContentReusable('open-tab-intermediate', 'Intermediate');
onClickTabContentReusable('open-tab-production', 'Production');
