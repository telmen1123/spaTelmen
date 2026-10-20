
export async function loadMapSvg() {
    const response = await fetch("./img/map.svg");
  
    if (!response.ok) {
      throw new Error("Failed to load map.svg");
    }
  
    return await response.text();
  }
  
  // SVG болон JSON дахь аймгийн нэрсийг тааруулах
  const provinceAliases = {
    Tuv: "Tov",
    Dornogovi: "Dornog",
  };
  
  // Аймгийн нэрээр хүнсний мэдээлэл шүүх
  export function getFoodsByProvince(nutritionData, provinceNameEn) {
    if (!Array.isArray(nutritionData)) return [];
  
    const target = provinceAliases[provinceNameEn] || provinceNameEn;
  
    return nutritionData.filter((item) => {
      const province =
        typeof item.province === "object"
          ? item.province?.en
          : item.province;
  
      return String(province ?? "").trim().toLowerCase() ===
             String(target).trim().toLowerCase();
    });
  }
  