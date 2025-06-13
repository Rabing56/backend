// const asynchHandler=()=>{}
const asynchHandler=(fn)=>async(req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(err.code||500).json({
            success:false,
            message:err.message
        })
    }
}



export {asynchHandler}

// const asynchHandler=(fn)=>{}  