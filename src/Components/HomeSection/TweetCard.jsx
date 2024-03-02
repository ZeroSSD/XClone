import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Menu, MenuItem, Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";

const TweetCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    console.log("Deleted");
    handleClose();
  };
  const handleEdit = () => {
    console.log("Edited");
    handleClose();
  };
  const handleOpenReplyModel = () => {};
  const handleCreateRetweet = () => {
    console.log("Create retweet");
  };
  const handleLike = () => {
    console.log("Liked");
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/Profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://cdn-icons-png.freepik.com/256/1144/1144760.png"
        />
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Sahil Dhumale</span>
              <span className="text-gray-600">@sahildhumale . 2m</span>
              <img
                className="ml-2 w-5 h-5"
                src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png"
                alt=""
              />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2">
            <div className="cursor-pointer">
              <p>xclone- full stack project </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="https://cdn-icons-png.freepik.com/256/1144/1144760.png"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  onClick={handleCreateRetweet}
                  className="cursor-pointer"
                />
                <p>54</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    onClick={handleLike}
                    className="cursor-pointer"
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={handleLike}
                    className="cursor-pointer"
                  />
                )}
                <p>54</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>430</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
