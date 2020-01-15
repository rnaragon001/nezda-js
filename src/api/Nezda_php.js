import axios from 'axios';

const Nezda_php = () => {
    axios.create({
        baseURL: 'localhost:8000/server.php',
    })
}

export default Nezda_php;