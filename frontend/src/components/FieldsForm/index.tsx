import { useState } from 'react';
import Button from '../Button';
import logoFasipe from '../../assets/fasipe_cuiaba_logo.png';
import { insertRegister } from '../../services/registerService';
import './styles.css';

export default function FieldsForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [course, setCourse] = useState('');

    async function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();

        try {
            await insertRegister({
                name,
                companion: Number(number),
                course,
            });
            alert('Cadastro enviado com sucesso!');
            setName('');
            setNumber('');
            setCourse('');
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <div className="fields-form-container">
            <div className="fields-form-logo-wrapper">
                <img src={logoFasipe} alt="logo fasipe" className="fields-form-logo" />
            </div>
            <form className="fields-form" onSubmit={handleSubmit}>
                <input
                    className="fields-form-input"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="fields-form-input"
                    name="number"
                    type="number"
                    placeholder="Quantidade de acompanhantes"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <input
                    className="fields-form-input"
                    name="course"
                    type="text"
                    placeholder="Selecione ou digite seu curso"
                    list="courses"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
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