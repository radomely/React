import React from 'react';
import {connect} from 'react-redux';
import {asyncGallery} from '../actions/galleryActions';

import './Gallery.css';

const Gallery = ({gallery, getGalleryData}) => {
    return (
        <div className="gallery">
            <button onClick = {getGalleryData}>Get data</button>
            <div className="gallery__container">
                
            </div>
        </div>
    );
};

function MSTP (state) {

}

function MDTP (dispatch) {
    return {
        getGalleryData: function (){
            dispatch(asyncGallery())
        }
    }
}

export default connect(null,MDTP)(Gallery);