var project = require('./projects.js');

const { Command, Option } = require('commander');
const { exit } = require('process');
const program = new Command();
program

//Program Info
  .version('2021.01.0')
  /*.name("webMethods.io Integration CLI tool")
  .usage("[global options] command")*/

//required options
  .requiredOption('-d, --domain <tenantDomain>', 'Tenant Doamin Name, e.g. "tenant.int-aws-us.webmethods.io"')
  .requiredOption('-u, --user <userid>', 'Tenant User ID')
  .requiredOption('-p, --password <password>', 'Tenant User Password')
  
//options
  .addOption(new Option('-t, --timeout <delay>', 'timeout in seconds').default(60, 'one minute'))
  //.addOption(new Option('-c, --command <name>', 'Command to be performed').choices(['project-create','project-list','project-update','project-get','import-wf', 'export-wf','import-flowservice', 'export-flowservice', 'test-wf']))
  //.Option('--debug','Output debug information')

//Additional help
  .addHelpText('before', `
\x1b[34m┌──────────────────────────────────────────────────────────────────────────────┐
│\x1b[36m webMethods.io Integration API CLI tool\x1b[0m\x1b[34m                                       │
│\x1b[0m This tool provides command line access to the webMethods.io Integration APIs\x1b[34m │
│\x1b[0m Intended to aid usage within DevOps Scenarios for asset deployment          \x1b[34m │
└──────────────────────────────────────────────────────────────────────────────┘\x1b[0m
`)

  .addHelpText('after', `

Example call:
  $ wmiocli --help`)


  .showSuggestionAfterError()
;

program.command('project [project-id]')
.description('Lists all projects or view an individual project')
.action((projectId) => {
  project.init(program.opts().domain,program.opts().user,program.opts().password,program.opts().timeout)
  var resp = project.list(projectId);
  if(resp)console.log(resp);
});  

program.command('project-create <project-name>')
.description('Create project with given name')
.action((projectName) => {
  project.init(program.opts().domain,program.opts().user,program.opts().password,program.opts().timeout)
  project.create(projectName);
});

program.command('project-update <project-id> <project-name>')
.description('Update project with new name')
.action((projectId, projectName) => {

  project.init(program.opts().domain,program.opts().user,program.opts().password,program.opts().timeout)
  project.update(projectId, projectName);
});
  
program.command('workflow-export <project-id> <workflow-id>')
.description('Export workflow with id <workflow-id> from project <project-id>')
.action((projectId, workflowId) => {

  //project.init(program.opts().domain,program.opts().user,program.opts().password,program.opts().timeout)
  //project.update(projectId, projectName);
});

program.command('workflow-import <project-id> <filename>')
.description('Import workflow from <filename> into project <project-id>')
.action((projectId, filename) => {

  //project.init(program.opts().domain,program.opts().user,program.opts().password,program.opts().timeout)
  //project.update(projectId, projectName);
});

program.command('workflow-delete <project-id> <workflow-id>')
.description('Delete workflow <workflow-id> from project <project-id>')
.action((projectId, filename) => {

  //project.init(program.opts().domain,program.opts().user,program.opts().password,program.opts().timeout)
  //project.update(projectId, projectName);
});

program.command('workflow-execute <project-id> <workflow-id>')
.description('Execute workflow <workflow-id> from project <project-id>')
.action((projectId, filename) => {

  //project.init(program.opts().domain,program.opts().user,program.opts().password,program.opts().timeout)
  //project.update(projectId, projectName);
});

program.command('workflow-status <run-id>')
.description('Gets Execution status for workflow execution <run-id>')
.action((projectId, filename) => {

  //project.init(program.opts().domain,program.opts().user,program.opts().password,program.opts().timeout)
  //project.update(projectId, projectName);
});

program.command('flowservice-export <project-id> <flow-name>')
.description('Export FlowService with name <flow-name> from project <project-id>')
.action((projectId, flowName) => {

  //project.init(program.opts().domain,program.opts().user,program.opts().password,program.opts().timeout)
  //project.update(projectId, projectName);
});

program.command('flowservice-import <project-id> <filename>')
.description('Import FlowService from <filename> into project <project-id>')
.action((projectId, filename) => {

  //project.init(program.opts().domain,program.opts().user,program.opts().password,program.opts().timeout)
  //project.update(projectId, projectName);
});

program.command('flowservice-delete <project-id> <flow-name>')
.description('Delete FlowService <flow-name> from project <project-id>')
.action((projectId, flowName) => {

  //project.init(program.opts().domain,program.opts().user,program.opts().password,program.opts().timeout)
  //project.update(projectId, projectName);
});



program.parse();




/*console.log("Command is [" + program.opts().command + "]")
if(program.opts().command.indexOf("project-")==0)
{
  console.log("initializing");
  project.init(program.opts().domain,program.opts().user,program.opts().password,program.opts().timeout)
  
  switch(program.opts().command)
  {
    case "project-list":
      //console.log("calling list");
      var resp = project.list();
      //console.log("RESP: " + resp);
      break;
    
    case "project-create":
      break;
    
    case "project-update":
      break;  

    case "project-get":
      break;

    default:
      console.log("Not implemented");

  }
}*/

