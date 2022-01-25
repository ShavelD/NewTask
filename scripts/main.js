function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}


loadScript('./scripts/defaultVar.js')
  .then(script => loadScript('./scripts/dnd_script.js'))
  .then(script => loadScript('./scripts/createTask.js'))
  .then(script => loadScript('./scripts/script.js'))
  .then(script => loadScript('./scripts/popUp.js'))
//   .then(script => loadScript('url'))  <---- пример как добавить 
