import React from "react";
import InfosUsuario from "./InfosUsuario";

const CardVideo = () => {
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }

      const titulo = "Tíulo do vídeo"

return(<div className="box-pagina-principal" onClick={reproduzVideo}>
<img src="https://picsum.photos/400/400?a=8 " alt="" />
<h4>{titulo}</h4>
<InfosUsuario/>
</div>)
}

export default CardVideo