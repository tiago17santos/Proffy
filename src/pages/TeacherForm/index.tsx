import React from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TextArea from '../../components/TextArea'
import Select from "../../components/Select";

import warnigIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function TeacherFrom() {
  return (
    <div id="page-teacher-form">
      <PageHeader 
      title="Que incrível que você quer dar aulas!" 
      description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
      />

    <main>
      <fieldset>
        <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />

          <TextArea name="bio" label="Biografia"/>
    
      </fieldset>

      <fieldset>
        <legend>Sobre a aula</legend>

        <Select 
          name="subject" 
          label="Matéria" 
          options={[
            {value: 'Artes', label: 'Artes'},
            {value: 'Matemática', label: 'Matemática'},
            {value: 'Português', label: 'Português'},
            {value: 'Física', label: 'Física'},
            {value: 'Quimica', label: 'Quimica'},
            {value: 'Inglês', label: 'Inglês'},
            {value: 'Educação física', label: 'Educação física'},
            {value: 'História', label: 'História'},
            {value: 'Geográfia', label: 'Geográfia'},
            {value: 'Ciências', label: 'Ciências'},
            {value: 'Biologia', label: 'Biologia'},
          ]}
        />          
        <Input name="cost" label="Custo da sua hora por aula" />
                
      </fieldset>

      <fieldset>
        <legend>Horarios disponiveis
          <button type="button">
            +Novo horario
          </button>
        </legend>

          <div className="schedule-item">
            <Select 
              name="week_day" 
              label="Dia da semana" 
              options={[
                {value: '0', label: 'Domingo'},
                {value: '1', label: 'Segunda-feira'},
                {value: '2', label: 'Terça-feira'},
                {value: '3', label: 'Quarta-feira'},
                {value: '4', label: 'Quinta-feira'},
                {value: '5', label: 'Sexta-feira'},
                {value: '6', label: 'Sábado'},
                
              ]}
            />

              <Input name="from" label="Das" type="time" />
              <Input name="to" label="As" type="time" />


          </div>

      </fieldset>

      <footer>
        <p>
          <img src={warnigIcon} alt="Aviso importante"/>
          Importante! <br />
          Preencha todos os dados
        </p>
        <button type="button">
          Salvar Cadastro
        </button>
      </footer>
    </main>




    </div>
  );
}

export default TeacherFrom;