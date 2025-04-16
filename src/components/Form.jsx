import { motion } from "framer-motion";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    tags: ""
  });

  const [dreams, setDreams] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleAddDream = () => {
    if (formData.title || formData.tags) {
      setDreams((prev) => [...prev, formData]);
      setFormData({ title: "", tags: "" });
    }
  };

  const handleDelete = (indexToDelete) => {
    setDreams((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      {/* FORM SECTION */}
      <motion.div
        className="form-container"
        style={{
          border: "1px solid #444",
          borderRadius: "12px",
          padding: "20px",
          maxWidth: "400px",
          margin: "0 auto",
          color: "white"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div style={{ marginBottom: "15px" }}>
          <motion.label layout htmlFor="title" style={{ display: "block", marginBottom: "6px" }}>
            Title
          </motion.label>
          <motion.input
            layout
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #777",
              backgroundColor: "transparent",
              color: "white"
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <motion.label layout htmlFor="tags" style={{ display: "block", marginBottom: "6px" }}>
            Tags
          </motion.label>
          <motion.input
            layout
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #777",
              backgroundColor: "transparent",
              color: "white"
            }}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddDream}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Add Dream
        </motion.button>
      </motion.div>

      {/* DREAM LIST SECTION */}
      <div
        style={{
          marginTop: "30px",
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "transparent",
          color: "white"
        }}
      >
        {dreams.map((dream, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            style={{
              padding: "15px",
              marginBottom: "10px",
              border: "1px solid #555",
              borderRadius: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              position: "relative"
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{dream.title}</div>

            {/* Tags styled as pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {dream.tags
                .split(",")
                .map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "#333",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "0.85rem"
                    }}
                  >
                    {tag.trim()}
                  </span>
                ))}
            </div>

            {/* Delete button */}
            <button
              onClick={() => handleDelete(index)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "transparent",
                border: "none",
                color: "#ff5e5e",
                cursor: "pointer",
                fontSize: "1rem"
              }}
              title="Delete Dream"
            >
              ✖
            </button>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Form;