#!/usr/bin/env node

const yargsInteractive = require('yargs-interactive');
const rimraf = require("rimraf");
const {spawn} = require ("child_process");

const options = {
    git: {
        delete: {
            interactive: {
                default: true
            },
            delete: {
                type: 'confirm',
                describe: 'Delete repository from project?'
            }
        },
        init: {
            interactive: {
                default: true
            },
            init: {
                type: 'confirm',
                describe: 'Init repository from project?'
            }
        }
    },
    modules: {
        interactive: {
            default: true
        },
        work: {
            type: 'confirm',
            describe: 'Work?'
        }
    }
};

yargsInteractive()
    .usage('$0 <command> [args]')
    .interactive(options.git.delete)
    .then((result) => {
        if (result.delete) {
            console.log(`Delete repository...\n`);
            rimraf("./.git/", function () { console.log("Successfully!"); });
            yargsInteractive()
                .usage('$0 <command> [args]')
                .interactive(options.git.init)
                .then((result) => {
                    if (result.init) {
                        const cmd = spawn ('git init', [], {shell: true});
                        cmd.stdout.on('data', (data) => {
                            console.log (data.toString ());
                        });
                    }
                })
        }
    })