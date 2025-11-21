export function base64Serializer() {
  return {
    read: (v) => {
      if (!v) return null;
      try {
        const decoded = atob(v);
        return JSON.parse(decoded);
      } catch (e) {
        console.error("Erro ao decodificar:", e);
        return null;
      }
    },
    write: (v) => {
      try {
        return btoa(JSON.stringify(v));
      } catch (e) {
        console.error("Erro ao codificar:", e);
        return "";
      }
    },
  };
}