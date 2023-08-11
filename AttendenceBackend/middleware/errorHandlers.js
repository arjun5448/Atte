const {constants} = require("../constants")

const errorHandlers = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.V_P:
            res.json({messsage : err.messsage,stacktrace : err.stack,});
            break;
        case constants.U_A:
            res.json({messsage : err.messsage,stacktrace : err.stack});
            break;
        case constants.Forb:
            res.json({messsage : err.messsage,stacktrace : err.stack,});
            break;
        case constants.N_F:
            res.json({messsage : err.messsage,stacktrace : err.stack,});
            break;
        case constants.S_E:
            res.json({messsage : err.messsage,stacktrace : err.stack,});
            break;
     
        default:
            console.log({messsage:err.messsage,Error:"No Error"});
            break;
    }
}

module.exports = errorHandlers;