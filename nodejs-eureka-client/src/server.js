import Express from 'express';
const app = Express();

app.get('/', (req, res) => {
    res.json({ response: 'done!' })
});

export default app;