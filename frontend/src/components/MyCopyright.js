import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function MyCopyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" sx={{mt: 5}}>
            {'Copyright © '}
            <Link color="inherit" href="https://nturelief.me/">
                NTU Relief
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}