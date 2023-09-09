import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import LatestVideoCard from "../components/LatestVideoCard";
import ColorText from "../components/ColorText";

const Dashboard = () => {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        Channel Dashboard
      </Typography>
      <Box sx={styles.columsContainer}>
        <LatestVideoCard sx={styles.item} />
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Latest Post</Typography>
            <Box sx={styles.postSuthorSection}>
              <Avatar
                sx={styles.avtr}
                src="https://yt3.googleusercontent.com/W5eTz0TA-pNz19j5NqEjQxbtNmFY1opQDztBDve221N01mp6mV4YeWvLfFRspyGWo9yAm75QfQ=s176-c-k-c0x00ffffff-no-rj"
              />
              <Typography sx={styles.postMeta}>Bunyod</Typography>
              <Typography sx={styles.postMeta}>Jan 18, 2023</Typography>
            </Box>
            <Typography variant="body2">
              I asked ChatGPT to tell me a joke about react js, he is not only
              smatr but also funny:)) we are going to have a video about it
              tommorow.
            </Typography>
            <Divider sx={styles.divider} />
            <Box sx={styles.postStats}>
              <Typography variant="body2">Likes</Typography>
              <Typography variant="body2">Comments</Typography>
              <Typography variant="h6">12</Typography>
              <Typography variant="h6">6</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              CO TO COMMUNITY TAB
            </Typography>
          </CardContent>
        </Card>
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Channel Analytics</Typography>
            <Typography variant="h7">Current Subscribers</Typography>
            <Typography variant="h4">4.144</Typography>
            <Typography variant="h7">
              <ColorText color={"green.main"}>+77</ColorText>
              <ColorText color={"neutral.main"}>in last 28 day</ColorText>
            </Typography>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Summery</Typography>
            <Typography variant="h8">
              <ColorText color={"neutral.normal"}>last 28 day</ColorText>
            </Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Views</Typography>
              <Typography variant="h7">255</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Watch Time (hours)</Typography>
              <Typography variant="h7">30</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Estimated Revenue</Typography>
              <Typography variant="h7">450$</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Top Videos</Typography>
            <Typography variant="h7">
              <ColorText color={"neutral.normal"}>
                Last 48 hours. Views
              </ColorText>
            </Typography>

            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                How to become a software developer in 2023{" "}
              </Typography>
              <Typography variant="h7">450</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                CSS Grid tutorial: How to use Grids to make awsome user
                interfaces.
              </Typography>
              <Typography variant="h7">287</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                Call APIS in react native: practical guide
              </Typography>
              <Typography variant="h7">130</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              CO TO VIDEO ANALYTICS
            </Typography>
          </CardContent>
        </Card>
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Latest comments</Typography>
            <ColorText color="neutral.normal">
              <Typography variant="h7">
                Channel comments I haven't responded to
              </Typography>
            </ColorText>
            <Box sx={styles.commentRow}>
              <Avatar
                sx={styles.avtr}
                alt="Bunyod"
                src="https://yt3.googleusercontent.com/W5eTz0TA-pNz19j5NqEjQxbtNmFY1opQDztBDve221N01mp6mV4YeWvLfFRspyGWo9yAm75QfQ=s176-c-k-c0x00ffffff-no-rj"
              />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>Bunyod</Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>

                <Typography sx={styles.commentText}>
                  Get tips from a successful creator on how to take a YouTube
                  channel and turn it into a business that earns you money
                </Typography>
              </Box>
              <Box component="img" sx={styles.videoThumbnail} src="https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg" />
            </Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.commentRow}>
              <Avatar
                sx={styles.avtr}
                alt="Bunyod"
                src="https://yt3.googleusercontent.com/W5eTz0TA-pNz19j5NqEjQxbtNmFY1opQDztBDve221N01mp6mV4YeWvLfFRspyGWo9yAm75QfQ=s176-c-k-c0x00ffffff-no-rj"
              />

              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>Bunyod</Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>

                <Typography sx={styles.commentText}>
                  How can I deploy this?
                </Typography>
              </Box>
              <Box
                component="img"
                sx={styles.videoThumbnail}
                src="https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg"
              />
            </Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.commentRow}>
              <Avatar
                sx={styles.avatar}
                alt="Bunyod"
                src="https://yt3.googleusercontent.com/W5eTz0TA-pNz19j5NqEjQxbtNmFY1opQDztBDve221N01mp6mV4YeWvLfFRspyGWo9yAm75QfQ=s176-c-k-c0x00ffffff-no-rj"
              />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>Bunyod</Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>

                <Typography sx={styles.commentText}>
                  Thank you, was very helpful.
                </Typography>
              </Box>

              <Box
                component="img"
                sx={styles.videoThumbnail}
                src="https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg"
              />
            </Box>

            <Typography sx={styles.cardAction} variant="link">
              VIEW MORE
            </Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Ideas for you</Typography>
              <Typography sx={styles.ideaQuestion}>
                Ready to get business savvy?
              </Typography>
              <Typography variant="h7">
                Get tips from a successful creator on how to take a YouTube
                channel and turn it into a business that earns you money
              </Typography>
              <Typography sx={styles.cardAction} variant="link">
                GET STARTED NOW
              </Typography>
            </Box>
            <Box
              component="img"
              sx={styles.ideaImage}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3THxPM00997vMayIr2kHrFL4IxI-CkftJIA7gBfb5nHCZarPSa_NCfJxGUSTiJBQEKw&usqp=CAU"
            />
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Creator Insider</Typography>
              <Box
                component="img"
                sx={styles.insiderImage}
                src="https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg"
              />
              <Typography sx={styles.ideaQuestion}>
                Ready to boost your skills using AI tools?
              </Typography>
              <Typography variant="h7">
                Get tips from a successful creator on how to take a YouTube
                channel and turn it into a business that earns you money
              </Typography>
              <Typography sx={styles.cardAction} variant="link">
                WATCH ON YOUTUBE
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
/** @type {import("mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
  columsContainer: {
    columns: "280px 3",
    maxWidth: 1400,
  },
  item: {
    mb: 2,
  },
  postSuthorSection: {
    display: "flex",
    alignItems: "center",
    my: 3,
  },
  avtr: {
    width: "30px",
    height: "auto",
    mr: 1,
  },
  postMeta: {
    mr: 1,
    color: "neutral.normal",
    fontSize: "0.8rem",
  },
  divider: {
    my: 2,
  },
  cardAction: {
    mt: 2,
  },
  videoStatsRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  m2: 2,
  "&:hover": {
    color: "primary.main",
    cursor: "pointer",
  },
  ideaContent: {
    display: "flex",
  },
  ideaImage: {
    width: 80,
    alignSelf: "center",
    ml: 5,
  },
  ideaQuestion: {
    fontSize: "0.9rem",
    fontWeight: 500,
    my: 2,
  },
  postStats: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridAutoRows: "25px",
    my: 3,
  },
  postAuthorSection: {
    display: "flex",
    alignItems: "center",
    my: 3,
  },
  videoThumbnail: {
    width: 80,
    ml: "auto",
  },
  commentRow: {
    display: "flex",
    alignItems: "flex-start",
    mt: 2,
  },
  commentDetailsSection: {
    display: "flex",
    alignItems: "center",
  },
  commentText: {
    fontSize: "0.8rem",
    mt: 0.5,
    mr: 2,
  },
  insiderImage: {
    width: "100%",
    mt: 1,
  },
};

export default Dashboard;
