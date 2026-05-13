const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

export type RegisterDTO = {
    name: string;
    companion: number;
    course: string;
};

export async function insertRegister(data: RegisterDTO): Promise<void> {
    const response = await fetch(`${API_URL}/registers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json();

        if (error.errors && error.errors.length > 0) {
            const messages = error.errors
                .map((e: { name: string; message: string }) => `• ${e.message}`)
                .join('\n');
            throw new Error(messages);
        }

        throw new Error(error.message || 'Erro ao enviar cadastro');
    }
}