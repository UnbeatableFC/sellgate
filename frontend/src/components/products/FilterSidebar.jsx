import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100000,
  });

  const [priceRange, setPriceRange] = useState([0, 100000]);

  const categories = ["Top Wear", "Bottom Wear"];

  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Purple",
    "Navy",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100000,
    });

    setPriceRange([0, params.maxPrice || 100000]);
  }, [searchParams]);

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (
        Array.isArray(newFilters[key]) &&
        newFilters[key].length > 0
      ) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };
    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter(
          (item) => item !== value
        );
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value

    setPriceRange([0 , newPrice])
    const newFilters = {...filters , minPrice : 0 , maxPrice : newPrice}
    setFilters(filters)
    updateURLParams(newFilters)
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">
        Filter
      </h3>
      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Category
        </label>
        {categories.map((c) => (
          <div key={c} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={c}
              onChange={handleFilterChange}
              checked ={filters.category === c}
              className="mr-2 size-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700 ">{c}</span>
          </div>
        ))}
      </div>
      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Gender
        </label>
        {genders.map((g) => (
          <div key={g} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={g}
              onChange={handleFilterChange}
              checked ={filters.gender === g}
              className="mr-2 size-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700 ">{g}</span>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Color
        </label>
        <div className="flex flex-wrap gap-2">
          {colors.map((col) => (
            <button
              key={col}
              name="color"
              value={col}
              onClick={handleFilterChange}
              cl
              className={`size-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color === col ? "ring-2 ring-blue-500" : ""}`}
              style={{ backgroundColor: col.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Size
        </label>
        {sizes.map((s) => (
          <div key={s} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={s}
              onChange={handleFilterChange}
              checked = {filters.size.includes(s)}
              className="mr-2 size-4  text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700 ">{s}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Materials
        </label>
        {materials.map((m) => (
          <div key={m} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={m}
              onChange={handleFilterChange}
               checked = {filters.material.includes(m)}
              className="mr-2 size-4  text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700 ">{m}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Brand
        </label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
               checked = {filters.brand.includes(brand)}
              className="mr-2 size-4  text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700 ">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100000}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span className="text-sm">₦0</span>
          <span className="text-sm">₦{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
