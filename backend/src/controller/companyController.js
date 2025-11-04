import Company from "../models/companies.js";

export const addCompany = async (req, res) => {
  try {
    const { logo, name, industryType, address, status, notes } = req.body;

    const existing = await Company.findOne({ name });
    if (existing) {
      return res.status(400).json({ msg: "Company already exists" });
    }

    const newCompany = new Company({
      logo,
      name,
      industryType,
      address,
      status,
      notes,
    });

    await newCompany.save();

    res.status(201).json({
      msg: "Company added successfully",
      company: newCompany,
    });
  } catch (error) {
    console.error("Error adding company:", error);
    return res.status(500).json({ msg: "Failed to add company" });
  }
};


export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();

    if (!companies.length) {
      return res.status(404).json({ msg: "No companies found" });
    }

    res.status(200).json({
      msg: "Companies fetched successfully",
      companies,
    });
  } catch (error) {
    console.error(" Error fetching companies:", error);
    return res.status(500).json({ msg: "Failed to get companies" });
  }
};

// export const updateCompany = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;

//     const updatedCompany = await Company.findByIdAndUpdate(id, updates, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedCompany) {
//       return res.status(404).json({ msg: "Company not found" });
//     }

//     res.status(200).json({
//       msg: "Company updated successfully",
//       company: updatedCompany,
//     });
//   } catch (error) {
//     console.error(" Error updating company:", error);
//     return res.status(500).json({ msg: "Failed to update company" });
//   }
// };

export const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCompany = await Company.findByIdAndDelete(id);

    if (!deletedCompany) {
      return res.status(404).json({ msg: "Company not found" });
    }

    res.status(200).json({
      msg: "Company deleted successfully",
      deletedCompany,
    });
  } catch (error) {
    console.error(" Error deleting company:", error);
    return res.status(500).json({ msg: "Failed to delete company" });
  }
};
