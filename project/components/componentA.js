import componentModuleACss from '../style/componentA.module.css';
import componentModuleLess from '../style/index.module.less';

console.log(componentModuleACss, componentModuleLess);
const div = document.createElement('div');
document.body.appendChild(div);

// div.className = componentModuleACss.footer;
document.body.className = componentModuleLess.content;
div.className = componentModuleLess.main;
