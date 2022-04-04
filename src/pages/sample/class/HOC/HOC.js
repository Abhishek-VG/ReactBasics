import * as React from 'react';
import { WithCard } from './withCard';

class Sample extends React.Component {
    render() {
        return <span>I am HOC</span>
    }
}

const HOC = WithCard(Sample)

export default HOC;