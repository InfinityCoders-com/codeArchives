<?php

    // Find directory size in bytes recursively( every file size inside every folder )

    // directorySize = function required params
    // $dir          = 'path/directoryName'
    function directorySize ($dir) {
        $size = 0;
        foreach (glob(rtrim($dir, '/').'/*', GLOB_NOSORT) as $each) {
            $size += is_file($each) ? filesize($each) : directorySize($each);
        }
        return $size;
    }

    // round off decimal to 
?>