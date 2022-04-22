import './Support.scss';

const Support = ({prop})=>{
    return (
        <div className="support-wrapper">
            <div className="title-quote-wrapper">
                <div className="title">Supported by real people</div>
                <div className="quote">Our team of Engineers works remotely from 44 countries providing customer support across multiple time zones.</div>
            </div>
            <div className="team-image-wrapper">
                <div className="team-image"></div>
            </div>
            <div className="grey-bg"></div>
            <div className="bg-dotted left"></div>
            <div className="bg-dotted right"></div>
            <div className="sm-circle top-left"></div>
            <div className="sm-circle bottom-left"></div>
            <div className="sm-circle top-right"></div>
        </div>
    )
}

export default Support;