import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="FAQ"
        subtitle="Common questions about my skills, background, and this project"
      />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is your professional background?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I am a multi-disciplinary analyst with expertise spanning actuarial
            science, financial analysis, and data analytics. My work involves
            quantitative risk modelling, financial forecasting, and building
            data-driven tools that support business decision-making. I hold
            professional qualifications in actuarial science and have hands-on
            experience advising clients across insurance, investment, and
            corporate finance sectors.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What technologies and tools do you work with?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            My core tech stack includes Python (pandas, NumPy, scikit-learn,
            matplotlib), R for statistical modelling, SQL for data querying, and
            Excel/VBA for financial modelling. On the visualization and
            dashboarding side I work with Power BI, Tableau, and — as
            demonstrated in this project — React with Material UI and Nivo
            charts. I also use Git/GitHub for version control and have exposure
            to cloud platforms including AWS and Google Cloud.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What kind of projects have you worked on?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I have completed projects ranging from life insurance reserving
            models and pension fund liability valuations to equity portfolio
            performance dashboards and customer churn prediction models. I have
            also built automated financial reporting pipelines that reduce manual
            workload significantly, and developed risk scoring frameworks for
            credit and underwriting teams. Each project in my portfolio reflects
            a real-world business problem solved with data.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What does this admin dashboard demonstrate?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This dashboard is built with React 18, Material UI v5, and Nivo for
            data visualisation. It showcases my ability to build full-featured
            front-end analytics interfaces — including interactive charts (line,
            bar, pie, geography), a data grid with filtering and sorting, a
            calendar for scheduling, and a form with validation. The dark/light
            theme toggle and responsive grid layout demonstrate attention to UI/UX
            design principles, which I consider an important skill for any
            analyst who needs to communicate insights effectively.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Are you open to freelance, contract, or full-time roles?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes — I am open to opportunities across all engagement types,
            including full-time analyst roles, contract consulting, and
            project-based freelance work. I am particularly interested in
            positions that sit at the intersection of quantitative finance and
            data engineering, where I can apply both my actuarial rigour and my
            software development skills. Feel free to reach out via the contact
            details in my profile or connect with me on LinkedIn.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;