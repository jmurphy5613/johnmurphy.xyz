import { Tabs, Tab } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import BarChartIcon from '@mui/icons-material/BarChart';


const Navbar = () => {
    return (
        <div>
            <Tabs>
                <Tab label={"Home"} iconPosition={"end"} icon={ <HomeIcon /> } sx={{ 
                    color: '#ffffff', 
                    fontFamily: 'Outfit',
                    textTransform: 'none'
                }} />
                <Tab label={"Projects"} iconPosition={"end"} icon={ <BackupTableIcon /> } sx={{ 
                    color: '#ffffff', 
                    fontFamily: 'Outfit',
                    textTransform: 'none'
                }} />
                <Tab label={"Skills"} iconPosition={"end"} icon={ <BarChartIcon /> } sx={{ 
                    color: '#ffffff', 
                    fontFamily: 'Outfit',
                    textTransform: 'none'
                }} />
            </Tabs>
        </div>
    )
}

export default Navbar;