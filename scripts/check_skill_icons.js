const { skillCategories } = require('../data/skills');
const { team } = require('../data/team');
const iconByName = new Map(skillCategories.flatMap(c => c.skills.map(s => [s.name.toLowerCase(), s.icon])));
const skillFallbackIcon = {
  'react': 'SiReact',
  'next.js': 'SiNextdotjs',
  'next': 'SiNextdotjs',
  'node.js': 'SiNodedotjs',
  'node': 'SiNodedotjs',
  'python': 'SiPython',
  'mongodb': 'SiMongodb',
  'tailwind css': 'SiTailwindcss',
  'tailwind': 'SiTailwindcss',
  'docker': 'SiDocker',
  'git': 'SiGit',
  'javascript': 'SiJavascript',
  'html': 'SiHtml5',
  'css': 'SiCss3',
  'jquery': 'SiJquery',
  'wordpress': 'SiWordpress',
  'plasmic studio': 'SiPlasmic',
  'webflow': 'SiWebflow',
  'sass': 'SiSass',
  'bootstrap': 'SiBootstrap',
  'divi builder': 'SiWordpress',
  'figma': 'SiFigma',
  'adobe xd': 'SiAdobexd',
  'framer motion': 'SiFramer',
  'typescript': 'SiTypescript',
  'aws': 'SiAmazonaws',
  'microsoft teams': 'SiMicrosoftteams',
  'jira': 'SiJira',
  'confluence': 'SiConfluence',
  'tableau': 'SiTableau',
  'looker': 'SiLooker',
  'google analytics': 'SiGoogleanalytics',
  'power bi': 'SiPowerbi',
  'excel': 'SiMicrosoftexcel',
  'business intelligence': 'SiDatabricks',
  'data analysis': 'SiDatadog',
  'data visualization': 'SiTableau',
  'analytics': 'SiGoogleanalytics',
  'requirement gathering': 'SiJira',
  'user stories': 'SiJira',
  'stakeholder management': 'SiUsers',
  'business process modeling': 'SiLucidchart',
  'api': 'SiPostman',
  'vs code': 'SiVisualstudiocode',
  'vscode': 'SiVisualstudiocode',
  'github': 'SiGithub',
  'gitHub': 'SiGithub',
  'powershell': 'SiPowershell',
};
function getIconKey(name){
  if(!name) return 'SiCode';
  const key = name.toLowerCase();
  return iconByName.get(key)||skillFallbackIcon[key]||'SiCode';
}
const teamSkills = [...new Set(team.flatMap(m => m.skills))];
const byCat = {};
skillCategories.forEach(c => { byCat[c.category] = c.skills.map(s => s.name); });
teamSkills.forEach(s => {
  const cat = ['Frontend', 'Databases', 'Backend','Tools & Platforms'].find(c => byCat[c].find(t => t.toLowerCase() === s.toLowerCase()));
  if (!cat) byCat['Tools & Platforms'].push(s);
});
const missing = [];
Object.entries(byCat).forEach(([cat, skills]) => {
  skills.forEach(s => {
    const icon = getIconKey(s);
    if (icon==='SiCode') missing.push({cat,s});
  });
});
console.log('missing', JSON.stringify(missing, null, 2));
console.log('all count', teamSkills.length);
