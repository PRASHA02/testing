const testController = async(req,res) => {
    try{
        res.status(200).send('Hello,I am a testing Developer');
    }catch(err){
        res.status(500);
        throw new Error(err.message)
    }
}

module.exports = testController