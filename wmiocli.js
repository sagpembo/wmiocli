const { Command, Option } = require('commander');
const program = new Command();
program

//Program Info
  .version('0.0.1')
  /*.name("webMethods.io Integration CLI tool")
  .usage("[global options] command")*/

//required options
  .requiredOption('-d, --url <tenantUrl>', 'Tenant Destination URL, e.g. "https://tenant.int-aws-us.webmethods.io/"')
  .requiredOption('-u, --user <userid>', 'Tenant User ID')
  .requiredOption('-p, --password <password>', 'Tenant User Password')
  .addOption(new Option('-c, --command <name>', 'Command to be performed').choices(['import-wf', 'export-wf','import-flowservice', 'export-flowservice', 'test-wf']))

//options
  .addOption(new Option('-t, --timeout <delay>', 'timeout in seconds').default(60, 'one minute'))


//Additional help
  .addHelpText('before', `

webMethods.io Integration CLI Tool`)



  .addHelpText('after', `

Example call:
  $ custom-help --help`)


  .showSuggestionAfterError();
;

program.parse();
console.log(`Tenant URL: ${program.opts().url}`);