import { exec } from 'child_process'
const command =
	'npx cucumber-js --dry-run --require "./dist/src/step-definitions/*.js" --format usage-json ./dist/src/features'
const commandOptions = {
	maxBuffer: 5 * 1024 * 1024,
}
exec(command, commandOptions, processCommandOutput)
function processCommandOutput(_err, stdout) {
	const steps = JSON.parse(stdout)
	const unusedSteps = getUnusedSteps(steps)
	printUnusedStepInfo(unusedSteps)
	setProcessExitCode(unusedSteps.length)
}
function getUnusedSteps(steps) {
	return steps.filter(step => !step.matches.length)
}
function printUnusedStepInfo(unusedSteps) {
	unusedSteps.forEach(step => {
		console.log('Unused step pattern: ', step.pattern)
		console.log('Location: ', step.uri)
		console.log()
	})
}
function setProcessExitCode(code) {
	process.exitCode = code
}
