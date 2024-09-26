export class Queue {
    limit: number;
    running: number;
    queue: any[];
    constructor(limit: number) {
        this.limit = limit || 8;
        this.running = 0;
        this.queue = [];
    }
    async add(task) {
        this.queue.push(task);
        await this.run();
    }
    async run() {
        while (this.queue.length && this.running < this.limit) {
            const task = this.queue.shift();
            try {
                this.running++;
                await task();
            } catch (error) {
                console.log("task run", error);
            }
            this.running--;
            await this.run();
        }
    }
}