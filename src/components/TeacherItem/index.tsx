import React from "react";
import whatsIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/67645178?s=60&u=6bc075bdce107a25705a2df344b62cab245b7579&v=4"
          alt="Tiago Alberto"
        />
        <div>
          <strong>Tiago Alberto</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsam nihil modi.
        <br />
        <br />
        Fugit voluptatem sit eveniet tenetur hic eaque, dolorum nisi reiciendis
        voluptates. Minima atque aliquam accusantium fugit debitis dolor!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 129,00</strong>
        </p>

        <button type="button">
          <img src={whatsIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;