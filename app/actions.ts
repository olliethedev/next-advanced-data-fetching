'use server';

export interface Data {
    type: 'A' | 'B';
    value: string;
    status: 'processing' | 'done';
}

// Simulates a data that can have multiple states
export async function getData(type: 'A' | 'B'): Promise<Data> {

    // Get current seconds of the minute
    const currentSeconds = new Date().getSeconds();
    
    console.log('Server called getData with type:', type, 'at', currentSeconds);
    
    // Simulate a slow response
    await new Promise(resolve => setTimeout(resolve, 3000));

    

    // First 15 seconds: return processing state
    if (currentSeconds < 15) {
        return {
            type,
            value: `Temp Value ${type}`,
            status: 'processing',
        };
    }
    
    // Rest of the minute: return A or B
    return {
        type,
        value: `Final Value ${type}`,
        status: 'done',
    };
}