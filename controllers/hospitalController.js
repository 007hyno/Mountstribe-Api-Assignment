import {getAllData,custom1} from "../models/hospital.js"

export const getData = async (req, res) => {
  try {
    const data = await getAllData();
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const customApi1 = async (req,res,hospital_id)=>{
  try{
    let id = req.params.hospitalId
    const data = await custom1(id);
    res.status(200).json({data})
  } catch (err){
    res.status(500).json({error:err.message})
  }
}
