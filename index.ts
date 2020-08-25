import Brain from './controllers/init'
(async () => {
    let reflected_str = await Brain.initialize()
    console.log("Reflected: " + reflected_str)
    Brain.alive();
})()