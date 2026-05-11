import Button from '../Button';
import logoFasipe from '../../assets/fasipe_cuiaba_logo.png';
import './styles.css';

export default function FieldsForm() {

    return (
        <div className="fields-form-container">
            <div className="fields-form-logo-wrapper">
                <img src={logoFasipe} alt="logo fasipe" className="fields-form-logo" />
            </div>
            <form action="" className="fields-form">
                <input className="fields-form-input" name="name" type="text" placeholder="Digite seu nome" />
                <input className="fields-form-input" name="number" type="number" placeholder="Quantidade de acompanhantes" />
                <input
                    className="fields-form-input"
                    name="course"
                    type="text"
                    placeholder="Selecione ou digite seu curso"
                    list="courses"
                />
                <datalist id="courses">
                    <option value="Fisioterapia" />
                    <option value="Direito" />
                    <option value="Análise e Desenvolvimento de Sistemas" />
                    <option value="Estética" />
                    <option value="Farmácia" />
                    <option value="Biomedicina" />
                    <option value="Contabilidade" />
                    <option value="Ciência da Computação" />
                    <option value="Engenharia da Computação" />
                </datalist>
                <Button />
            </form>
        </div>
    );
}