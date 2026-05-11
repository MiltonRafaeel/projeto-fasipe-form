import Button from '../Button';
import './styles.css';

export default function FieldsForm() {

    return (
        <div>
            <form action="">
                <input name="name" type="text" placeholder="Digite seu nome" />
                <input name="number" type="number" placeholder="Quantidade de acompanhantes" />
                <input
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