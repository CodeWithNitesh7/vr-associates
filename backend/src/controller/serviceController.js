import Service from "../models/service.js";

export const addService = async (req,res) =>{
    try {
        const {icon,name,description,slug} = req.body;

        const existig = await Service.findOne({name});

        if (existig) {
            return res.status(400).json({msg:"Service already exist"})
        }
        const newService = new Service({
            icon,
            name,
            description,
            slug
        })

        await newService.save();
        res.status(201).json({msg: "Service added successfully",service:newService})
    } catch (error) {
        console.error("Cannot add service",error);
        return res.status(500).json({msg:"Failed to add service"})
    }
}

export const getAllServices = async (req,res) => {
    try {
        const services = await Service.find().sort({createdAt: -1});

    if (!services.length) {
      return res.status(404).json({ msg: "No services found" });
    }

        res.status(200).json({
            msg:"Our services",
            total:services.length, 
            services
        })
    } catch (error) {
        console.error("Cannot get the services",error);
        return res.status(500).json({msg:"Failed to get the services"})
    }
}

export const deleteService = async (req,res) =>{
    try {

        const {name} = req.params;

        const service = await Service.findOneAndDelete({name});

        if (!service) {
            return res.status(404).json({msg: "No service found"})
        }

        res.status(200).json({msg: "Service deleted successfully"})
    } catch (error) {
        console.error("Error deleteing service",error);
        return res.status(500).json({msg:"Cannot delete service"})
    }
}

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { icon, name, description, slug } = req.body;

    const updatedService = await Service.findByIdAndUpdate(
      id,
      { icon, name, description, slug },
      { new: true, runValidators: true } // returns updated doc + runs schema validation
    );

    if (!updatedService) {
      return res.status(404).json({ msg: "Service not found" });
    }

    res.status(200).json({
      msg: "Service updated successfully",
      service: updatedService,
    });
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ msg: "Cannot update the service" });
  }
};
