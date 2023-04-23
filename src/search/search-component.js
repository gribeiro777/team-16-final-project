import React, {useEffect, useState} from 'react'
import Select, {components} from 'react-select';
import {useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link, useNavigate } from "react-router-dom";
import { searchSpotifyThunk } from '../thunks/spotify-thunks';
import { findUsersThunk } from '../thunks/user-thunks';

library.add(faSpotify)


const SearchComponent = ({query}) => {
    const [searchInput, setSearchInput] = useState(query.query);
    const navigate = useNavigate();

    const [searchedUsers, setSearchedUsers] = useState([])

    const {tracks} = useSelector(state => state.spotifyData)
    const {users} = useSelector(state => state.userData)

    const userSearch = () => {
        return query ? users.filter(user => user.username.indexOf(query.query) !== -1) : []
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findUsersThunk())
    }, [])
    useEffect(() => {
        dispatch(searchSpotifyThunk({query: searchInput, count: 50}))
    }, [query])
    useEffect(() => {
        setSearchedUsers(userSearch())
    }, [users, query])

    const SpotifyIcon = () => {
        return <FontAwesomeIcon icon="fab fa-spotify" color='green' />;
    };

    const SpotifyDropdown = props => {
        return (
            <components.DropdownIndicator {...props}>
                <SpotifyIcon />
            </components.DropdownIndicator>
        );
    };

    const handleChange = (e) => {
        setSearchInput(() => {
            if (e !== null) return e;
        })
    };

    const handleKeyDown = (e) => {
        if (e !== null && e.keyCode === 13) {
            navigate(`/search/${searchInput}`)
        }
    };

    return <div className="secondary-color">
            <div className="row" style={{"minHeight": "90vh"}}>
                <div className="col-2 secondary-color ps-5"></div>
                <div className="col-8 card main-card main-color mt-5">
                    <div className="row search-bar pt-2 main-color border-0 sticky-top">
                        <Select className='z-index-2'
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    backgroundColor: '#f5ebeb',
                                    "&:hover": {
                                        borderColor: "#22313f"
                                    }
                                }),
                                menuList: base => ({
                                    ...base,
                                    padding: 0,
                                    borderRadius: "5px"
                                }),
                                option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                                    return {
                                    ...styles,
                                    backgroundColor: isFocused ? "#dfcdc3" : "#f5ebeb"
                                    };
                                }
                            }}
                            options={[]}
                            noOptionsMessage={() => null}
                            components={{ DropdownIndicator: SpotifyDropdown }}
                            onKeyDown={handleKeyDown}
                            onInputChange={handleChange}
                            placeholder="Search for users or songs">
                            defaultValue=query
                        </Select>
                    </div>
                    <div className='row pt-3'>
                        <div className='col pt-3'>
                            <h2> Tracks</h2>
                            <div className='ul border-end off-black-border mt-3'>
                            {tracks.map(track => {
                                const image_label = <img src={track.album.images[0].url} alt={''} height="48px" width="48px"></img>
                                const song_label = `${track.name} - ${track.artists.map(artist => artist.name).join(', ')}`;
                                return <div className='li me-2 pb-3 pt-3' style={{"borderColor": "black"}} key={track.id}>
                                    <Link to={`/tracks/${track.id}`} style={{ color: 'black', textDecoration: 'none', background: "blue"}}>
                                        <div className='row pe-2'>
                                            <div className='col-2'>
                                                {image_label} 
                                            </div>
                                            <div className='col-10'>
                                                <div className='row'>{song_label}</div>
                                                <div className='row'>{`${Math.floor(track.duration_ms / 60000)}:${Math.trunc(track.duration_ms / 1000 % 60)}`}</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            })}
                            </div>
                        </div>
                        <div className='col pt-3'>
                            <h2>Users</h2>
                            <div className='ul mt-3'>
                            {searchedUsers.map(user => {
                                return <div className='li me-2 pb-3 pt-3' key={user.id}>
                                    <Link to={`/profile/${user._id}`} style={{ color: 'black', textDecoration: 'none'}}>
                                    <div className='row pe-2'>
                                            <div className='col-2'>
                                                <img src="idk.com" height="48px" width="48px"/>
                                            </div>
                                            <div className='col-10'>
                                            {user.username}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2 secondary-color"></div>
            </div>
        </div>

}

export default SearchComponent