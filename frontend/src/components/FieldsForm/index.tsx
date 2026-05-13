import { useState } from 'react';
import Button from '../Button';
import logoFasipe from '../../assets/fasipe_cuiaba_logo.png';
import { insertRegister } from '../../services/registerService';
import './styles.css';

const ALLOWED_COURSES = [
    'Nenhum',
    'Fisioterapia',
    'Direito',
    'Análise e Desenvolvimento de Sistemas',
    'Estética',
    'Farmácia',
    'Biomedicina',
    'Contabilidade',
    'Ciência da Computação',
    'Engenharia da Computação',
];

export default function FieldsForm() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [course, setCourse] = useState('');

    function getCanonicalCourse(value: string): string | null {
        if (!value) return null;
        const normalized = value.trim().toLowerCase();
        const match = ALLOWED_COURSES.find(c => c.toLowerCase() === normalized);
        return match ?? null;
    }

    async function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();

        const canonical = getCanonicalCourse(course);
        if (!canonical) {
            alert('Por favor selecione um curso válido da lista.');
            return;
        }

        const payload = {
            name,
            companion: Number(number),
            course: canonical,
        };

        console.log('payload enviado:', JSON.stringify(payload));

        try {
            await insertRegister(payload);
            alert('Cadastro enviado com sucesso!');
            setName('');
            setNumber('');
            setCourse('');
        } catch (error: any) {
            alert(error.message || 'Erro ao enviar cadastro');
        }
    }

    function handleCourseBlur() {
        const canonical = getCanonicalCourse(course);
        if (canonical) {
            setCourse(canonical);
        } else {
            setCourse('');
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
                    placeholder="Digite seu nome completo"
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
                    onBlur={handleCourseBlur}
                />
                <datalist id="courses">
                    <option value="Nenhum" />
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